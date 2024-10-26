
import { IsNumber, IsArray, IsString } from 'class-validator';

export class ItemDto {
  @IsNumber()
  title: string;
   
  @IsNumber()
  price: number;

  @IsNumber()
  phoneNumber: string;
}
