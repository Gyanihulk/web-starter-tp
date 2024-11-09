import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';

@Module({
  providers: [SmsService],
  exports: [SmsService],  // Export so other modules can use SmsService
})
export class SmsModule {}
