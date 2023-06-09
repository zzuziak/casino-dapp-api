import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PurchaseTokensDto } from 'dtos/PurchaseTokensDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/purchase-tokens')
  async purchaseTokens(@Body() body: PurchaseTokensDto) {
    return {
      result: this.appService.purchaseTokens(body.address, body.amount),
    };
  }

  @Post('/flip-coin')
  async flipCoin(@Body() body: PurchaseTokensDto) {
    return {
      result: this.appService.flipCoin(body.address, body.amount),
    };
}
