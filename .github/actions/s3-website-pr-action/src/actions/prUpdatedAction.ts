import * as github from '@actions/github';
import S3 from '../s3Client';
import s3UploadDirectory from '../utils/s3UploadDirectory';
import validateEnvVars from '../utils/validateEnvVars';
import checkBucketExists from '../utils/checkBucketExists';
import githubClient from '../githubClient';
import deactivateDeployments from '../utils/deactivateDeployments';
import { ReposCreateDeploymentResponseData } from '@octokit/types';

// Required environment variables
export const requiredEnvVars = [
  'AWS_ACCESS_KEY_ID',
  'AWS_SECRET_ACCESS_KEY',
  'GITHUB_TOKEN'
];

// Function to deploy the website to S3 and create a GitHub deployment
export default async (
  bucketName: string,
  uploadDirectory: string,
  environmentPrefix: string
) => {
  const websiteUrl = `http://${bucketName}.s3-website-us-east-1.amazonaws.com`;
  const { repo } = github.context;
  const branchName = github.context.payload.pull_request.head.ref;

  console.log('PR Updated');

  validateEnvVars(requiredEnvVars);

  const bucketExists = await checkBucketExists(bucketName);

  if (!bucketExists) {
    console.log('S3 bucket does not exist. Creating...');
    try {
      // Create S3 bucket
      await S3.createBucket({
        Bucket: bucketName,
        ACL: 'public-read',
        ObjectOwnership: 'BucketOwnerPreferred'
      }).promise();

      // Configure bucket website
      await S3.putBucketWebsite({
        Bucket: bucketName,
        WebsiteConfiguration: {
          IndexDocument: { Suffix: 'index.html' },
          ErrorDocument: { Key: 'index.html' }
        }
      }).promise();

      // Configure public access block
      await configurePublicAccessBlock(bucketName);

      // Configure bucket policy
      await configureBucketPolicy(bucketName);
    } catch (error) {
      console.error('Error while configuring S3 bucket:', error);
      throw error;
    }
  } else {
    console.log('S3 Bucket already exists. Skipping creation...');
  }

  // Deactivate previous deployments on GitHub
  await deactivateDeployments(repo, environmentPrefix);

  try {
    // Create GitHub deployment
    const deployment = await githubClient.repos.createDeployment({
      ...repo,
      ref: `refs/heads/${branchName}`,
      environment: `${environmentPrefix || 'PR-'}${github.context.payload.pull_request.number}`,
      auto_merge: false,
      transient_environment: true,
      required_contexts: []
    });

    if (isSuccessResponse(deployment.data)) {
      await githubClient.repos.createDeploymentStatus({
        ...repo,
        deployment_id: deployment.data.id,
        state: 'in_progress'
      });

      console.log('Uploading files...');
      // Upload files to S3 bucket
      await s3UploadDirectory(bucketName, uploadDirectory);

      await githubClient.repos.createDeploymentStatus({
        ...repo,
        deployment_id: deployment.data.id,
        state: 'success',
        environment_url: websiteUrl
      });

      console.log(`Website URL: ${websiteUrl}`);
    }
  } catch (error) {
    console.error('Error while creating GitHub deployment:', error);
    throw error;
  }
};

function isSuccessResponse(
  object: any
): object is ReposCreateDeploymentResponseData {
  return 'id' in object;
}

// Utility function to configure the public access block for the bucket
const configurePublicAccessBlock = async (bucket: string): Promise<void> => {
  try {
    const params = {
      Bucket: bucket,
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: false,
        BlockPublicPolicy: false,
        IgnorePublicAcls: false,
        RestrictPublicBuckets: false
      }
    };

    await S3.putPublicAccessBlock(params).promise();
    console.log(`Public access block configured for bucket "${bucket}".`);
  } catch (error) {
    console.error('Error configuring public access block:', error);
    throw error;
  }
};

// Utility function to configure the bucket policy
const configureBucketPolicy = async (bucket: string): Promise<void> => {
  try {
    const policyDocument = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'PublicReadGetObject',
          Effect: 'Allow',
          Principal: '*',
          Action: 's3:GetObject',
          Resource: `arn:aws:s3:::${bucket}/*`
        }
      ]
    };

    const params = {
      Bucket: bucket,
      Policy: JSON.stringify(policyDocument) // Convert the policy to a JSON string
    };

    await S3.putBucketPolicy(params).promise();
    console.log(`Bucket policy configured for bucket "${bucket}".`);
  } catch (error) {
    console.error('Error configuring bucket policy:', error);
    throw error;
  }
};



// import * as github from '@actions/github';
// import S3 from '../s3Client';
// import s3UploadDirectory from '../utils/s3UploadDirectory';
// import validateEnvVars from '../utils/validateEnvVars';
// import checkBucketExists from '../utils/checkBucketExists';
// import githubClient from '../githubClient';
// import deactivateDeployments from '../utils/deactivateDeployments';
// import { ReposCreateDeploymentResponseData } from '@octokit/types';

// export const requiredEnvVars = [
//   'AWS_ACCESS_KEY_ID',
//   'AWS_SECRET_ACCESS_KEY',
//   'GITHUB_TOKEN'
// ];

// export default async (
//   bucketName: string,
//   uploadDirectory: string,
//   environmentPrefix: string
// ) => {
//   const websiteUrl = `http://${bucketName}.s3-website-us-east-1.amazonaws.com`;
//   const { repo } = github.context;
//   const branchName = github.context.payload.pull_request!.head.ref;

//   console.log('PR Updated');

//   validateEnvVars(requiredEnvVars);

//   const bucketExists = await checkBucketExists(bucketName);

//   if (!bucketExists) {
//     console.log('S3 bucket does not exist. Creating...');
//     await S3.createBucket({
//       Bucket: bucketName,
//       ACL: 'public-read',
//       ObjectOwnership: 'BucketOwnerPreferred'
//     }).promise();

//     console.log('Configuring bucket website...');
//     await S3.putBucketWebsite({
//       Bucket: bucketName,
//       WebsiteConfiguration: {
//         IndexDocument: { Suffix: 'index.html' },
//         ErrorDocument: { Key: 'index.html' }
//       }
//     }).promise();
//     try {
//       await configurePublicAccessBlock(branchName);
//     } catch (error) {
//       console.log('Error while configurePublicAccessBlock', error);
//     }

//     try {
//       await configureBucketPolicy(branchName);
//     } catch (error) {
//       console.log('Error while configureBucketPolicy', error);
//     }

//     // console.log('Deleting public access block...');
//     // await S3.deletePublicAccessBlock({
//     //   Bucket: bucketName
//     // }).promise();

//     // try {
//     //   console.log('Delete Bucket ownership controls...');
//     //   await S3.deleteBucketOwnershipControls({
//     //     Bucket: bucketName
//     //   }).promise();
//     // } catch (error) {
//     //   console.error('Error deleting bucket ownership controls:', error);
//     // }
//   } else {
//     console.log('S3 Bucket already exists. Skipping creation...');
//   }

//   await deactivateDeployments(repo, environmentPrefix);

//   const deployment = await githubClient.repos.createDeployment({
//     ...repo,
//     ref: `refs/heads/${branchName}`,
//     environment: `${environmentPrefix || 'PR-'}${
//       github.context.payload.pull_request!.number
//     }`,
//     auto_merge: false,
//     transient_environment: true,
//     required_contexts: []
//   });

//   if (isSuccessResponse(deployment.data)) {
//     await githubClient.repos.createDeploymentStatus({
//       ...repo,
//       deployment_id: deployment.data.id,
//       state: 'in_progress'
//     });

//     console.log('Uploading files...');
//     await s3UploadDirectory(bucketName, uploadDirectory);

//     await githubClient.repos.createDeploymentStatus({
//       ...repo,
//       deployment_id: deployment.data.id,
//       state: 'success',
//       environment_url: websiteUrl
//     });

//     console.log(`Website URL: ${websiteUrl}`);
//   }
// };

// function isSuccessResponse(
//   object: any
// ): object is ReposCreateDeploymentResponseData {
//   return 'id' in object;
// }

// const configurePublicAccessBlock = async (bucket: string): Promise<void> => {
//   try {
//     const params = {
//       Bucket: bucket,
//       PublicAccessBlockConfiguration: {
//         BlockPublicAcls: false,
//         BlockPublicPolicy: false,
//         IgnorePublicAcls: false,
//         RestrictPublicBuckets: false
//       }
//     };

//     await S3.putPublicAccessBlock(params).promise();
//     console.log(`Public access block configured for bucket "${bucket}".`);
//   } catch (error) {
//     console.error('Error configuring public access block:', error);
//     throw error;
//   }
// };

// const configureBucketPolicy = async (bucket: string): Promise<void> => {
//   try {
//     const policyDocument = {
//       Version: '2012-10-17',
//       Statement: [
//         {
//           Sid: 'PublicReadGetObject',
//           Effect: 'Allow',
//           Principal: '*',
//           Action: 's3:GetObject',
//           Resource: 'arn:aws:s3:::${bucket}/*'
//         }
//       ]
//     };

//     const params = {
//       Bucket: bucket,
//       Policy: policyDocument
//     };

//     await S3.putBucketPolicy(params).promise();
//     console.log(`Bucket policy configured for bucket "${bucket}".`);
//   } catch (error) {
//     console.error('Error configuring bucket policy:', error);
//     throw error;
//   }
// };
