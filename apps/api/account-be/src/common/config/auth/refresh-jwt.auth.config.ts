import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';

export default registerAs(
  'jwt-refresh',
  (): JwtSignOptions => ({
    secret: process.env.REFRESH_JWT_SECRET,
    expiresIn: process.env.REFRESH_JWT_EXPIRE_IN,
  })
);
