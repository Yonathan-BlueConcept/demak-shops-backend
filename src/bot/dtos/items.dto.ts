
import { IsNumber, IsArray, IsString } from 'class-validator';

export class ItemDto {
  @IsNumber()
  title: string;
   
  @IsNumber()
  price: number;

  @IsString()
  ownerName:string;

  // @IsNumber()
  // phoneNumber: string;
}
