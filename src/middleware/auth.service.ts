import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

const SECRET_KEY = "amit_bhai";
const EXPIRY = "1w";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async verifyToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token, {
        secret: SECRET_KEY,
      });
    } catch (err) {
      throw new UnauthorizedException("Invalid token");
    }
  }

  // Gererate token with secret key and expiry
  generateToken(payload: any): string {
    return this.jwtService.sign(payload, { secret: SECRET_KEY, expiresIn: EXPIRY });
  }
}
