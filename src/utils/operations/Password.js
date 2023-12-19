import { compare, hash } from "bcryptjs";

async function HashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function VerifyPassword(password, hashedPassword) {
  const verifyPassword = await compare(password, hashedPassword);
  return verifyPassword;
}

export { HashPassword, VerifyPassword };
