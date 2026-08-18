class SMSService {
  constructor() {
    this.partnerID = process.env.SMS_PARTNER_ID;
    this.apiKey = process.env.SMS_API_KEY;
    this.shortcode = process.env.SMS_SHORTCODE;
    this.baseUrl = 'https://bulksms.afrinettelecom.co.ke/api/services';
    this.otpUrl = process.env.SMS_OTP_URL || `${this.baseUrl}/sendotp`;
  }

  validatePhoneNumber(mobile) {
    // More flexible validation - accept international formats
    // Accept: 2547xxxxxxxx, +2547xxxxxxxx, 07xxxxxxxx, 01xxxxxxxx, and other international formats
    const cleanMobile = mobile.replace(/[\s\-\(\)]/g, '');
    
    // Check if it's a valid phone number (10-15 digits, optional + prefix)
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(cleanMobile);
  }

  normalizePhoneNumber(mobile) {
    let normalized = mobile.replace(/[\s\-\(\)]/g, '');
    
    // Convert 07xxxxxxxx to 2547xxxxxxxx
    if (normalized.startsWith('07')) {
      normalized = '254' + normalized.substring(1);
    }
    // Convert 01xxxxxxxx to 2541xxxxxxxx
    else if (normalized.startsWith('01')) {
      normalized = '254' + normalized.substring(1);
    }
    // Convert +2547xxxxxxxx to 2547xxxxxxxx
    else if (normalized.startsWith('+254')) {
      normalized = normalized.substring(1);
    }
    
    return normalized;
  }

  async sendSingleSMS(mobile, message) {
    try {
      const normalizedMobile = this.normalizePhoneNumber(mobile);
      
      if (!this.validatePhoneNumber(normalizedMobile)) {
        throw new Error('Invalid phone number format');
      }

      const response = await fetch(`${this.baseUrl}/sendsms/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apikey: this.apiKey,
          partnerID: this.partnerID,
          shortcode: this.shortcode,
          mobile: normalizedMobile,
          message: message,
          pass_type: 'plain'
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send SMS');
      }

      return {
        success: true,
        data,
        message: 'SMS sent successfully'
      };
    } catch (error) {
      console.error('SMS Sending Error:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to send SMS'
      };
    }
  }

  async sendOTP(mobile, otp) {
    try {
      const normalizedMobile = this.normalizePhoneNumber(mobile);
      
      console.log('Sending OTP to:', normalizedMobile, 'OTP:', otp);
      console.log('OTP URL:', this.otpUrl);
      console.log('Partner ID:', this.partnerID);
      console.log('API Key:', this.apiKey ? '***' : 'MISSING');
      
      const response = await fetch(this.otpUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apikey: this.apiKey,
          partnerID: this.partnerID,
          mobile: normalizedMobile,
          otp: otp,
          message: `Your OTP is: ${otp}`,
          shortcode: this.shortcode || ''
        })
      });

      const data = await response.json();
      console.log('SMS API Response:', data);
      
      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to send OTP');
      }

      return {
        success: true,
        data,
        message: 'OTP sent successfully'
      };
    } catch (error) {
      console.error('OTP Sending Error:', error);
      return {
        success: false,
        error: error.message,
        message: 'Failed to send OTP'
      };
    }
  }
}

const smsService = new SMSService();
export default smsService;
