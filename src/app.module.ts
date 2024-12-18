import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocietiesModule } from './societies/societies.module';
import { FlatplotModule } from './flatplot/flatplot.module';

@Module({
  imports: [SocietiesModule, FlatplotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
