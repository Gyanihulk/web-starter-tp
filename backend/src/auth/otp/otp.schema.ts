import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/domain/user'; 

export type OtpDocument = Otp & Document;

@Schema({ timestamps: true }) // Automatically manage createdAt and updatedAt fields
export class Otp {
  @Prop({ type: String, required: true, ref: 'User' }) 
  user_id: string;

  @Prop({ type: String, required: true }) 
  otp: string;

  @Prop({ type: String, default: 'not verified' }) 
  status: string;

  @Prop({ type: String }) 
  mobileNumber: string;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
