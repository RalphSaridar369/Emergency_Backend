const saltRounds = 10;
const bcrypt = require("bcrypt");

export const generatePassword = (value: string): string => {
  const hash = bcrypt.hashSync(value, saltRounds);
  return hash;
};

export const comparePassword = (value: string, hash: string): boolean => {
  return bcrypt.compareSync(value, hash);
};
