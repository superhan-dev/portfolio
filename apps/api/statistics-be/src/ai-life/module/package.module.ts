import { LoggerModule } from '@/module/logger.module';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PackageFacade } from '../application/package.facade';
import { PackageStatisticsHelper } from '../domain/package/package-statistics.helper';
import { PackageService } from '../domain/package/package.service';
import { PackageLogEntity } from '../infrastructure/package/entity/package-log.entity';
import { PackageMediaEntity } from '../infrastructure/package/entity/package-media.entity';
import { PackageStatisticsPastEntity } from '../infrastructure/package/entity/package-statistics-past.entity';
import { PackageStatisticsTodayEntity } from '../infrastructure/package/entity/package-statistics-today.entity';
import { PackageEntity } from '../infrastructure/package/entity/package.entity';
import { PackageLogRepository } from '../infrastructure/package/repository/package-log.repository';
import { PackageMediaRepository } from '../infrastructure/package/repository/package-media.repository';
import { PackageStatisticsPastRepository } from '../infrastructure/package/repository/package-statistics-past.repository';
import { PackageStatisticsTodayRepository } from '../infrastructure/package/repository/package-statistics-today.repository';
import { PackageRepository } from '../infrastructure/package/repository/package.repository';
import { PackageController } from '../presentation/controller/package.controller';
import { StatisticsController } from '../presentation/controller/statistics.controller';
import { StatisticsModule } from './statistics.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PackageEntity,
      PackageLogEntity,
      PackageMediaEntity,
      PackageStatisticsPastEntity,
      PackageStatisticsTodayEntity,
    ]),
    forwardRef(() => StatisticsModule),
    LoggerModule,
  ],
  controllers: [PackageController, StatisticsController],
  providers: [
    PackageFacade,
    PackageService,
    PackageStatisticsHelper,
    PackageRepository,
    PackageLogRepository,
    PackageMediaRepository,
    PackageStatisticsPastRepository,
    PackageStatisticsTodayRepository,
  ],
  exports: [PackageFacade],
})
export class PackageModule {}
