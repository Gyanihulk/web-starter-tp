import { Injectable, HttpStatus, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../users/domain/user';
import { Otp, OtpDocument } from './otp.schema';
import { OtpStatusEnum } from '../../statuses/otp-status.enum';



@Injectable()
export class OtpService {
  constructor(@InjectModel(Otp.name) private otpModel: Model<OtpDocument>) {}

  
  generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  
  async saveOtp(user: User): Promise<Otp> {
    const otp = this.generateOtp();

    const otpDoc = new this.otpModel({
      user_id: user.id,
      mobileNumber:user.mobileNumber,
      otp,
      status: OtpStatusEnum.NOT_VERIFIED,
    });
    console.log(otpDoc)
    return await otpDoc.save();
  }

  
  
  async verifyOtp(mobileNumber: string, otp: string): Promise<void> {
    const otpDoc = await this.otpModel.findOne({ mobileNumber, otp });

    if (!otpDoc) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        message: 'Invalid OTP or Mobile Number',
      });
    }

    if (otpDoc.status === OtpStatusEnum.VERIFIED) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        message: 'OTP already verified',
      });
    }

    
    otpDoc.status = OtpStatusEnum.VERIFIED;
    await otpDoc.save();
  }
}
