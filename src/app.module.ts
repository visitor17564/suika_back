import { Module } from '@nestjs/common';
import { RanksController } from './ranks/ranks.controller';
import { RanksService } from './ranks/ranks.service';
@Module({
  imports: [],
  controllers: [RanksController],
  providers: [RanksService],
})
export class AppModule {}
