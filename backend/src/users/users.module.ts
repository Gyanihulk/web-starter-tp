import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';

import { UsersService } from './users.service';
import { DocumentUserPersistenceModule } from './infrastructure/persistence/document/document-persistence.module';
import { FilesModule } from '../files/files.module';
import { SmsModule } from '../sms/sms.module';
import { OtpModule } from '../auth/otp/otp.module';

const infrastructurePersistenceModule = DocumentUserPersistenceModule;

@Module({
  imports: [
    // import modules, etc.
    infrastructurePersistenceModule,
    FilesModule,SmsModule,OtpModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, infrastructurePersistenceModule],
})
export class UsersModule {}
