import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OtpService } from './otp.service';
import { OtpSchema, Otp } from './otp.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Otp.name, schema: OtpSchema }]),
  ],
  providers: [OtpService],
  exports: [OtpService],
})
export class OtpModule {}
