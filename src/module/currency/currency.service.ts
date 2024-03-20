// currency.service.ts
import { BadGatewayException, Injectable } from '@nestjs/common';
import { ENVIRONMENT } from '../common/constant/environment/environ-variable';
import axios from 'axios';
import { CurrentDto } from './dto/currency.dto';

@Injectable()
export class CurrencyService {
  async getExchangeRate(payload: CurrentDto): Promise<number> {
    const { baseCurrency, targetCurrency, amount } = payload;
    if (!baseCurrency || !targetCurrency) {
      throw new BadGatewayException(
        'Invalid request. Please provide base currency, target currency, and amount.',
      );
    }
    const apiUrl = `${ENVIRONMENT.URL}${baseCurrency}`;

    try {
      const response = await axios.get(apiUrl);
      const rates = response.data.conversion_rates;
      if (!rates.hasOwnProperty(targetCurrency)) {
        throw new Error(`Exchange rate for ${targetCurrency} not found.`);
      }
      return rates[targetCurrency];
    } catch (error) {
      throw new Error('Failed to fetch exchange rate.');
    }
  }

  convertCurrency(amount: number, exchangeRate: number): number {
    return amount * exchangeRate;
  }
}
