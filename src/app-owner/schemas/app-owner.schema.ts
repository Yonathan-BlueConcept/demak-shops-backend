import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type AppOwnerDocument = AppOwner& Document;

@Schema()
export class AppOwner extends Document {
    @Prop()
    name: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    chatId?: number;

    @Prop()
    appName: string;
}

export const AppOwnerSchema = SchemaFactory.createForClass(AppOwner);
