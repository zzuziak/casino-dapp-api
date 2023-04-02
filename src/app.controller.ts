import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PurchaseTokensDto } from 'dtos/PurchaseTokensDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/token-contract-address')
  // getTokenContractAddress(): { address: string } {
  //   return { address: this.appService.getTokenContractAddress() };
  // }


  // @Get('/transaction-status')
  // async getTransactionStatus(@Query('hash') hash: string): Promise<string> {
  //   return this.appService.getTransactionStatus(hash);
  // }

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
