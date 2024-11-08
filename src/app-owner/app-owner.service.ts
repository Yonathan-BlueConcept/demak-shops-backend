import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppOwner, AppOwnerDocument } from './schemas/app-owner.schema';
import { Model } from 'mongoose';
import { CreateAppOwnerDto } from './dtos/app-owner.dto';

@Injectable()
export class AppOwnerService {

    constructor(@InjectModel(AppOwner.name) private appOwnerModel: Model<AppOwnerDocument>) {}

  async create(data: CreateAppOwnerDto): Promise<AppOwner> {
    const createdData = new this.appOwnerModel(data);
    return createdData.save();
  }

  async findAll(): Promise<AppOwner[]> {
    return this.appOwnerModel.find().exec();
  }
}
