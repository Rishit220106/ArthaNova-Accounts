import mongoose from 'mongoose';

const dataRightsRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true
    },
    requestType: {
      type: String,
      required: [true, 'Request type is required'],
      enum: ['Access', 'Correction', 'Erasure', 'Withdrawal of Consent', 'Grievance']
    },
    details: {
      type: String,
      required: [true, 'Details are required'],
      trim: true,
      maxlength: [3000, 'Details cannot exceed 3000 characters']
    },
    referenceId: {
      type: String,
      trim: true,
      default: ''
    },
    status: {
      type: String,
      enum: ['Pending', 'In Review', 'Completed', 'Rejected'],
      default: 'Pending'
    },
    policyVersion: {
      type: String,
      default: '2026-09-01'
    },
    adminNotes: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

const DataRightsRequest = mongoose.model('DataRightsRequest', dataRightsRequestSchema);

export default DataRightsRequest;
