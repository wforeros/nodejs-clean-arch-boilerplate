import { middleware } from 'express-openapi-validator';

const apiSpec = process.env.OPENAPI_FILE_PATH || './oas3.yaml';
const validateResponses = !!(
  process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION && process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION.toLowerCase() === 'true'
);

const validateRequests = !!(
  process.env.OPENAPI_ENABLE_REQUEST_VALIDATION && process.env.OPENAPI_ENABLE_REQUEST_VALIDATION.toLowerCase() === 'true'
);

const validator = middleware({
  apiSpec,
  validateResponses,
  validateRequests,
  ignorePaths: /contents\/default.*/
});

export { apiSpec, validator as OpenApiValidator };
