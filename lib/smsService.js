class SMSService {
  constructor() {
    this.partnerID = process.env.SMS_PARTNER_ID;
    this.apiKey = process.env.SMS_API_KEY;
    this.shortcode = process.env.SMS_SHORTCODE;
    this.baseUrl = 'https://sms.imarabiz.com/api/services';
  }

  validatePhoneNumber(mobile) {
    // Basic validation for Kenyan phone numbers
    const kenyanRegex = /^(\+254|0)?[7]\d{8}$/;
    return kenyanRegex.test(mobile);
  }

  normalizePhoneNumber(mobile) {
    let normalized = mobile.replace(/[\s\-\(\)]/g, '');
    
    // Convert 07xxxxxxxx to 2547xxxxxxxx
    if (normalized.startsWith('07')) {
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

      const response = await fetch(`${this.baseUrl}/sms/single`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apikey: this.apiKey,
          partnerID: this.partnerID,
          shortcode: this.shortcode,
          mobile: normalizedMobile,
          message: message
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
}

const smsService = new SMSService();
export default smsService;
