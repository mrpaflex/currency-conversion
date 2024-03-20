import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

@Module({
  imports: [],
  controllers: [CurrencyController],
  providers: [CurrencyService],
})
export class CurrencyModule {}
