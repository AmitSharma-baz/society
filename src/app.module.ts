import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocietiesModule } from './societies/societies.module';
import { FlatplotModule } from './flatplot/flatplot.module';
import { CommitteeModule } from './committee/committee.module';
import { FlatOccupantModule } from './flat-occupant/flat-occupant.module';

@Module({
  imports: [SocietiesModule, FlatplotModule, CommitteeModule, FlatOccupantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
