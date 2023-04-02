import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import * as tokenJson from '/assets/CasinoToken.json';
import * as casinoJson from '/assets/Casino.json';

const TOKEN_CONTRACT_ADDRESS = '0x7a511e39a98f2A9fe50995C32a4fCD4Ea17113C5';
const CASINO_CONTRACT_ADDRESS = '0xF63e52D63D0cE2b4EF146E280DF825306f05D0F5';

@Injectable()
export class AppService {
  provider;
  tokenContract;
  casinoContract;

  constructor(private configService: ConfigService) {
    this.provider = new ethers.providers.AlchemyProvider(
      'goerli',
      this.configService.get<string>('ALCHEMY_API_KEY'),
    );
    this.tokenContract = new ethers.Contract(
      TOKEN_CONTRACT_ADDRESS,
      tokenJson.abi,
      this.provider,
    );
    this.casinoContract = new ethers.Contract(
      CASINO_CONTRACT_ADDRESS,
      casinoJson.abi,
      this.provider,
    );
  }

  getPrivateKey() {
    const privateKey = this.configService.get<string>('PRIVATE_KEY');
    //console.log(privateKey);
    if (!privateKey || privateKey.length <= 0) {
      throw new Error('Private key missing');
    }
    return privateKey;
  }

  getTokenContractAddress(): string {
    return this.tokenContract.address;
  }
  getCasinoContractAddress(): string {
    return this.casinoContract.address;
  }

  async purchaseTokens(address: string, amount: number) {
    // const privateKey = this.getPrivateKey();
    // const wallet = new ethers.Wallet(privateKey).connect(this.provider);
    // const tx = await this.casinoContract.purchaseTokens(address, amount);
    // const txReceipt = await tx.wait();
    // return txReceipt.status == 1 ? 'Completed' : 'Reverted';
  }

  async flipCoin(address: string, amount: number) {
    // TODO: implement
  }
}
