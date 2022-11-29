export class ServerError extends Error {
  constructor(message, reason) {
    super(message);
    this.name = "ServerError";
    this.reason = reason;
  }
}
