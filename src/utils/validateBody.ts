import { validate, ValidationError } from "class-validator";
import { BadValidationError } from "./errors";

export const validateDTO = async <T extends object>(dto: T) => {
  const errors = await validate(dto);

  if (errors.length > 0) {
    const formattedErrors = errors.map((err: ValidationError) => ({
      property: err.property,
      constraints: err.constraints,
    }));

    throw new BadValidationError(formattedErrors);
  }

  return {
    isValid: true,
    errors: null,
  };
};
