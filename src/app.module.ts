import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmissionController } from './emission/emission.controller';

@Module({
  imports: [],
  controllers: [AppController, EmissionController],
  providers: [AppService],
})
export class AppModule {}
