const {
  DEV_API_GATEWAY_REGION,
  DEV_API_GATEWAY_URL,
  DEV_COGNITO_REGION,
  DEV_USER_POOL_ID,
  DEV_APP_ID,
  DEV_IDENTITY_POOL_ID,
  PROD_API_GATEWAY_REGION,
  PROD_API_GATEWAY_URL,
  PROD_COGNITO_REGION,
  PROD_USER_POOL_ID,
  PROD_APP_ID,
  PROD_IDENTITY_POOL_ID,
} = process.env;

const dev = {
  stage: 'dev',
  apiGateway: {
    REGION: DEV_API_GATEWAY_REGION,
    URL: DEV_API_GATEWAY_URL,
  },
  cognito: {
    REGION: DEV_COGNITO_REGION,
    USER_POOL_ID: DEV_USER_POOL_ID,
    APP_CLIENT_ID: DEV_APP_ID,
    IDENTITY_POOL_ID: DEV_IDENTITY_POOL_ID,
  },
};

const prod = {
  stage: 'prod',
  apiGateway: {
    REGION: PROD_API_GATEWAY_REGION,
    URL: PROD_API_GATEWAY_URL,
  },
  cognito: {
    REGION: PROD_COGNITO_REGION,
    USER_POOL_ID: PROD_USER_POOL_ID,
    APP_CLIENT_ID: PROD_APP_ID,
    IDENTITY_POOL_ID: PROD_IDENTITY_POOL_ID,
  },
};

// Default to dev if not set
const config = process.env.NOW_GITHUB_COMMIT_REF === 'master' ? prod : dev;
console.log(config);

export default {
  // Add common config values here
  file: {
    allowedFileTypes: ['image/png', 'image/jpeg'],
    allowedFileSize: 10485760,
  },
  ...config,
};
