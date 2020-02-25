const dev = {
  stage: 'dev',
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'awtarkey-uploads-dev',
  },
  apiGateway: {
    REGION: 'us-west-2',
    USERS_URL: 'https://dev-api.colemars.dev/users',
    DESIGNS_URL: 'https://dev-api.colemars.dev/designs',
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_9AJfFSR7r',
    APP_CLIENT_ID: '43h28i8vqvvbkppuq91uvfqqne',
    IDENTITY_POOL_ID: 'us-west-2:84077fe0-b370-4268-99a5-0945eca5cfa6',
  },
};

const prod = {
  stage: 'prod',
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'awtarkey-uploads-dev',
  },
  apiGateway: {
    REGION: 'us-west-2',
    USERS_URL: 'https://dev-api.colemars.dev/users',
    DESIGNS_URL: 'https://dev-api.colemars.dev/designs',
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_9AJfFSR7r',
    APP_CLIENT_ID: '43h28i8vqvvbkppuq91uvfqqne',
    IDENTITY_POOL_ID: 'us-west-2:84077fe0-b370-4268-99a5-0945eca5cfa6',
  },
};

// Default to dev if not set
const config = process.env.NOW_GITHUB_COMMIT_REF === 'master' ? prod : dev;

export default {
  // Add common config values here
  file: {
    allowedFileTypes: ['image/png', 'image/jpeg'],
    allowedFileSize: 10485760,
  },
  ...config,
};
