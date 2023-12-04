import { Controller, Get, Post, Body } from '@nestjs/common';
import { RanksService } from './ranks.service';
import { promises } from 'dns';

@Controller('ranks')
export class RanksController {
  constructor(private readonly rankService: RanksService) {}

  @Get()
  getAllRanks() {
    return this.rankService.getAllRanks();
  }

  @Post('/create')
  createRank(@Body('name') name: string, @Body('score') score: number) {
    return this.rankService.createRank(name, score);
  }
}
