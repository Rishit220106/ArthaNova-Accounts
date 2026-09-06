import mongoose from 'mongoose';

const consentRecordSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true
    },
    purpose: {
      type: String,
      required: [true, 'Consent purpose is required'],
      enum: ['contact_enquiry', 'marketing_communications', 'data_rights_request']
    },
    consentGiven: {
      type: Boolean,
      required: [true, 'Consent status is required']
    },
    policyVersion: {
      type: String,
      required: [true, 'Policy version is required'],
      default: '2026-09-01'
    },
    source: {
      type: String,
      required: [true, 'Source form is required'],
      default: 'contact_form'
    },
    contactRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact',
      default: null
    }
  },
  {
    timestamps: true
  }
);

const ConsentRecord = mongoose.model('ConsentRecord', consentRecordSchema);

export default ConsentRecord;
