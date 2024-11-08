import { Module } from '@nestjs/common';
import { AppOwnerController } from './app-owner.controller';
import { AppOwnerService } from './app-owner.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppOwner, AppOwnerSchema } from './schemas/app-owner.schema';

@Module({
  controllers: [AppOwnerController],
  providers: [AppOwnerService],
  imports:[  MongooseModule.forFeature([{ name: AppOwner.name, schema: AppOwnerSchema }]),]
})
export class AppOwnerModule {}
