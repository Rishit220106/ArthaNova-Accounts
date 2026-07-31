import Contact from '../models/Contact.js';
import { asyncHandler } from '../utils/index.js';

// @desc    Get dashboard statistics
// @route   GET /admin/dashboard
// @access  Public (should be protected in future)
export const getDashboardStats = asyncHandler(async (req, res, next) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const stats = await Contact.aggregate([
    {
      $facet: {
        totalContacts: [{ $count: 'count' }],
        newContacts: [{ $match: { status: 'New' } }, { $count: 'count' }],
        readContacts: [{ $match: { status: 'Contacted' } }, { $count: 'count' }],
        archivedContacts: [{ $match: { status: 'Closed' } }, { $count: 'count' }],
        todayContacts: [{ $match: { createdAt: { $gte: today } } }, { $count: 'count' }]
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
