import mongoose from 'mongoose';
import Contact from '../models/Contact.js';
import { asyncHandler, AppError } from '../utils/index.js';

// @desc    Get dashboard statistics
// @route   GET /api/admin/dashboard
// @access  Public (should be protected in future)
export const getDashboardStats = asyncHandler(async (req, res, next) => {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const stats = await Contact.aggregate([
    {
      $facet: {
        totalContacts: [{ $count: 'count' }],
        newContacts: [{ $match: { status: 'New' } }, { $count: 'count' }],
        readContacts: [{ $match: { status: 'Read' } }, { $count: 'count' }],
        archivedContacts: [{ $match: { status: 'Archived' } }, { $count: 'count' }],
        todayContacts: [
          { 
            $match: { 
              createdAt: { 
                $gte: startOfToday,
                $lte: endOfToday
              } 
            } 
          }, 
          { $count: 'count' }
        ]
      }
    }
  ]);

  const data = {
    totalContacts: stats[0].totalContacts[0]?.count || 0,
    newContacts: stats[0].newContacts[0]?.count || 0,
    readContacts: stats[0].readContacts[0]?.count || 0,
    archivedContacts: stats[0].archivedContacts[0]?.count || 0,
    todayContacts: stats[0].todayContacts[0]?.count || 0
  };

  res.status(200).json({
    success: true,
    data
  });
});

// @desc    Get all contacts
// @route   GET /api/admin/contacts
// @access  Public (should be protected in future)
export const getAllContacts = asyncHandler(async (req, res, next) => {
  let { page = 1, limit = 10, search, status } = req.query;

  // Validation
  page = parseInt(page, 10);
  limit = parseInt(limit, 10);

  if (isNaN(page) || page < 1) {
    return next(new AppError('Invalid page parameter', 400));
  }

  if (isNaN(limit) || limit < 1) {
    return next(new AppError('Invalid limit parameter', 400));
  }

  const query = {};

  if (status) {
    const allowedStatuses = ['New', 'Read', 'Archived'];
    if (!allowedStatuses.includes(status)) {
      return next(new AppError('Invalid status parameter', 400));
    }
    query.status = status;
  }

  if (search) {
    const searchRegex = new RegExp(search, 'i');
    query.$or = [
      { name: searchRegex },
      { email: searchRegex },
      { company: searchRegex }
    ];
  }

  const skip = (page - 1) * limit;

  const [contacts, totalRecords] = await Promise.all([
    Contact.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Contact.countDocuments(query)
  ]);

  const totalPages = Math.ceil(totalRecords / limit);

  res.status(200).json({
    success: true,
    count: contacts.length,
    pagination: {
      currentPage: page,
      limit,
      totalPages,
      totalRecords
    },
    data: contacts
  });
});

// @desc    Get single contact
// @route   GET /api/admin/contact/:id
// @access  Public (should be protected in future)
export const getContactById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError('Invalid contact ID', 400));
  }

  const contact = await Contact.findById(id);

  if (!contact) {
    return next(new AppError('Contact not found', 404));
  }

  res.status(200).json({
    success: true,
    data: contact
  });
});

// @desc    Update contact status
// @route   PATCH /api/admin/contact/:id
// @access  Public (should be protected in future)
export const updateContactStatus = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError('Invalid contact ID', 400));
  }

  if (!status) {
    return next(new AppError('Invalid status value', 400));
  }

  const allowedStatuses = ['New', 'Read', 'Archived'];
  if (!allowedStatuses.includes(status)) {
    return next(new AppError('Invalid status value', 400));
  }

  const contact = await Contact.findByIdAndUpdate(
    id,
    { status },
    { new: true, runValidators: true }
  );

  if (!contact) {
    return next(new AppError('Contact not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Contact status updated successfully',
    data: contact
  });
});

// @desc    Delete contact
// @route   DELETE /api/admin/contact/:id
// @access  Public (should be protected in future)
export const deleteContact = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError('Invalid contact ID', 400));
  }

  const contact = await Contact.findByIdAndDelete(id);

  if (!contact) {
    return next(new AppError('Contact not found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Contact deleted successfully'
  });
});
