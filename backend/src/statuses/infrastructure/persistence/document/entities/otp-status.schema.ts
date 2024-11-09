import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { OtpStatusEnum } from '../../../../otp-status.enum';


export type OtpDocument = Otp & Document;

@Schema()
export class Otp {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  otp: string;

  @Prop({ required: true, enum: OtpStatusEnum, default: OtpStatusEnum.NOT_VERIFIED })  // Using enum here
  status: OtpStatusEnum;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
