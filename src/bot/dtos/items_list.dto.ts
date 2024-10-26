
import { IsNumber, IsArray, IsString } from 'class-validator';

class ItemDto {
  @IsNumber()
  title: string;
   
  @IsNumber()
  price: number;


}


export class ItemsListDto{
    @IsNumber()
    phoneNumber: string;

    items:ItemDto[]
}

