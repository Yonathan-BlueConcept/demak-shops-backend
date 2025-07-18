import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class IdentityApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    // Get API keys from headers
    const demakShopsApiKey = request.headers['kelemat_store_api_key'];

    // Get the valid API keys from environment variables
    // const apiKey = this.configService.get<string>('API_KEY');
    const apiKey = "029rweosdkfjlkajfdfldskjfklsdjf803893298udfa88f898_____83";
  
    if (demakShopsApiKey !== apiKey) {
      throw new UnauthorizedException('API key Missed');
    }

    return true;
  }
}
