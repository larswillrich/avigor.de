import jwt from "jsonwebtoken";
import { config } from "../config";

interface TokenPayload {
  adminId: number;
}

export function signToken(adminId: number): string {
  return jwt.sign({ adminId } as TokenPayload, config.jwtSecret, {
    expiresIn: "24h",
  });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, config.jwtSecret) as TokenPayload;
}
