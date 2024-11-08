import { IsString } from 'class-validator';

export class CreateAppOwnerDto {
    @IsString()
    name: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    chatId?: string;

    @IsString()
    appName: string;
}
