export class ApiError extends Error {
  constructor(status, message, errors = null, data = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
    this.data = data;
  }
}
