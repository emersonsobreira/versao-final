import { Module } from '@nestjs/common';
import { TurmasService } from './turmas.service';
import { TurmasController } from './turmas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TurmasController],
  providers: [TurmasService],
  imports: [PrismaModule],
})
export class TurmasModule {}
