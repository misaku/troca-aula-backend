import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly config: ConfigService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneBy(username);
    try {
      if (!user) throw new UnauthorizedException();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      await bcrypt.compare(pass, user.password);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userData } = user;

      const payload = { sub: userData };
      return {
        access_token: await this.jwtService.signAsync(payload, {
          secret: this.config.get('secret'),
        }),
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      throw new UnauthorizedException();
    }
  }
}
