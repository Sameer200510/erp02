import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AdmissionsModule } from './admissions/admissions.module';

@Module({
  imports: [PrismaModule, AdmissionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
