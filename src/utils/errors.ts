import { ValidationError } from "class-validator";

export class BadRequestError extends Error {
  error: string;

  constructor(error: string) {
    super(error);
    this.error = error;
  }
}

export class BadValidationError extends Error {
  error: ValidationError[];

  constructor(error: ValidationError[]) {
    super();
    this.error = error;
  }
}
