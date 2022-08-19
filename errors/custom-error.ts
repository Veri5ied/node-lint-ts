class CustomAPIError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomAPIError = (message: string, statusCode: number) => {
  return new CustomAPIError(message, statusCode);
};

export { CustomAPIError, createCustomAPIError };
