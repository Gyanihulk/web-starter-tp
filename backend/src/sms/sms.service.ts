import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class SmsService {
    private client: Twilio;

  constructor() {
    // Initialize the Twilio client with credentials
    this.client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  async sendSMS(to: string , message: string): Promise<void> {
    try {
      const response=await this.client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER, 
        to: to,
      });
      console.log("sms send",{
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER, 
        to: to,
      })
    } catch (error) {
      console.error('Error sending SMS:', error);
      throw new Error('Failed to send SMS');
    }
  }
}
