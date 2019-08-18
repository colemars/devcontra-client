const dev = {
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'devcontra-api-dev-attachmentsbucket-sse4szutsuon',
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://contra-api.colemars.dev/dev',
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_9AJfFSR7r',
    APP_CLIENT_ID: '43h28i8vqvvbkppuq91uvfqqne',
    IDENTITY_POOL_ID: 'us-west-2:84077fe0-b370-4268-99a5-0945eca5cfa6',
  },
};

const prod = {
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'stampsafe-2-api-prod-attachmentsbucket-1a7s34i2ixcbe',
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://api.colemars.dev/prod',
  },
  cognito: {
    REGION: 'us-west-2',
    IDENTITY_POOL_ID: 'us-west-2:52cd66b1-0252-4fe8-8cd7-929bf4bb1f37',
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  file: {
    allowedFileTypes: ['image/png', 'image/jpeg'],
    allowedFileSize: 10485760,
  },
  ...config,
};
