import { IsNotEmpty, IsNumber, IsString, isString } from 'class-validator';

export class CurrentDto {
  @IsNotEmpty()
  @IsString()
  baseCurrency: string;
  @IsNotEmpty()
  @IsString()
  targetCurrency: string;
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
