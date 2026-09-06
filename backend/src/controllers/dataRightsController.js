import DataRightsRequest from '../models/DataRightsRequest.js';
import ConsentRecord from '../models/ConsentRecord.js';
import { asyncHandler, AppError } from '../utils/index.js';

// @desc    Create a new Data Rights request
// @route   POST /api/data-rights
// @access  Public
export const createDataRightsRequest = asyncHandler(async (req, res, next) => {
  const { name, email, requestType, details, referenceId, consentGiven, policyVersion } = req.body;

  if (!consentGiven || (typeof consentGiven === 'string' && consentGiven !== 'true')) {
    return next(new AppError('Authorization consent is required to process data rights requests', 400));
  }

  const newRequest = await DataRightsRequest.create({
    name,
    email,
    requestType,
    details,
    referenceId: referenceId || '',
    policyVersion: policyVersion || '2026-09-01',
    status: 'Pending'
  });

  // Log consent record for data rights request processing
  await ConsentRecord.create({
    email: newRequest.email,
    purpose: 'data_rights_request',
    consentGiven: true,
    policyVersion: policyVersion || '2026-09-01',
    source: 'data_rights_form'
  });

  res.status(201).json({
    success: true,
    message: 'Data Rights request submitted successfully. Our Grievance Officer will review your request.',
    data: {
      id: newRequest._id,
      requestType: newRequest.requestType,
      status: newRequest.status,
      createdAt: newRequest.createdAt
    }
  });
});

// @desc    Get all Data Rights requests (Admin only)
// @route   GET /api/admin/data-rights
// @access  Private (Admin)
export const getAllDataRightsRequests = asyncHandler(async (req, res, next) => {
  const requests = await DataRightsRequest.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: requests.length,
    data: requests
  });
});

// @desc    Get Data Rights request by ID (Admin only)
// @route   GET /api/admin/data-rights/:id
// @access  Private (Admin)
export const getDataRightsRequestById = asyncHandler(async (req, res, next) => {
  const request = await DataRightsRequest.findById(req.params.id);

  if (!request) {
    return next(new AppError('Data Rights request not found', 404));
  }

  res.status(200).json({
    success: true,
    data: request
  });
});

// @desc    Update Data Rights request status/notes (Admin only)
// @route   PATCH /api/admin/data-rights/:id
// @access  Private (Admin)
export const updateDataRightsRequestStatus = asyncHandler(async (req, res, next) => {
  const { status, adminNotes } = req.body;

  const validStatuses = ['Pending', 'In Review', 'Completed', 'Rejected'];
  if (status && !validStatuses.includes(status)) {
    return next(new AppError('Invalid status value', 400));
  }

  const updateFields = {};
  if (status) updateFields.status = status;
  if (typeof adminNotes === 'string') updateFields.adminNotes = adminNotes;

  const updatedRequest = await DataRightsRequest.findByIdAndUpdate(
    req.params.id,
    updateFields,
    { new: true, runValidators: true }
  );

  if (!updatedRequest) {
    return next(new AppError('Data Rights request not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Data Rights request updated successfully',
    data: updatedRequest
  });
});
