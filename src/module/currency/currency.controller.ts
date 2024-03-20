// currency.controller.ts
import { Controller, Get, Body } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrentDto } from './dto/currency.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('convert')
  async convertCurrency(@Body() payload: CurrentDto): Promise<any> {
    const { amount } = payload;
    const exchangeRate = await this.currencyService.getExchangeRate(payload);

    return this.currencyService.convertCurrency(amount, exchangeRate);
  }
}
