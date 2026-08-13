const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ZakaPaymentSchema = new Schema({
  zakaNumber: { 
    type: String, 
    required: true, 
    trim: true 
  },
  zakaMember: { 
    type: Schema.Types.ObjectId, 
    ref: 'Zaka', 
    required: true 
  },
  month: { 
    type: String, 
    required: true, 
    enum: ['January', 'February', 'March', 'April', 'May', 'June', 
           'July', 'August', 'September', 'October', 'November', 'December']
  },
  year: { 
    type: Number, 
    required: true, 
    min: 2020, 
    max: 2100 
  },
  amount: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  paymentMethod: { 
    type: String, 
    required: true, 
    enum: ['cash', 'mpesa', 'bank'], 
    default: 'cash' 
  },
  paymentDate: { 
    type: Date, 
    default: Date.now 
  },
  notes: String,
  recordedBy: String
}, { 
  timestamps: true 
});

// Compound unique index to prevent duplicate payments
ZakaPaymentSchema.index({ zakaNumber: 1, month: 1, year: 1 }, { unique: true });

// Check if model exists before compiling it
let ZakaPayment;
try {
  ZakaPayment = mongoose.model('ZakaPayment');
} catch {
  ZakaPayment = model('ZakaPayment', ZakaPaymentSchema, 'zakapayments');
}

module.exports = ZakaPayment;
