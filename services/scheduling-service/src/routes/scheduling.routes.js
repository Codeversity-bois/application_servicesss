// const router = require("express").Router();
// //const auth = require("../middlewares/auth.middleware");
// //const role = require("../middlewares/role.middleware");

// // Import controllers (you'll need to create these)
// const availabilityCtrl = require("../controllers/availability.controller");
// const interviewCtrl = require("../controllers/interview.controller");
// const calendarCtrl = require("../controllers/calendar.controller");

// // ========== AVAILABILITY ROUTES ==========

// // Set/Update recruiter availability
// router.post("/availability", auth, role("recruiter"), availabilityCtrl.setAvailability);

// // Get recruiter availability
// router.get("/availability/:recruiterId", auth, availabilityCtrl.getAvailability);

// // Get available slots for interview scheduling
// router.get("/availability/:recruiterId/slots", auth, availabilityCtrl.getAvailableSlots);

// // Update specific availability slot
// router.patch("/availability/:availabilityId", auth, role("recruiter"), availabilityCtrl.updateAvailability);

// // Delete availability
// router.delete("/availability/:availabilityId", auth, role("recruiter"), availabilityCtrl.deleteAvailability);


// // ========== INTERVIEW ROUTES ==========

// // Schedule a new interview
// router.post("/interviews/schedule", auth, role("recruiter"), interviewCtrl.scheduleInterview);

// // Get all interviews (with filters)
// router.get("/interviews", auth, interviewCtrl.getAllInterviews);

// // Get interview by ID
// router.get("/interviews/:interviewId", auth, interviewCtrl.getInterviewById);

// // Update interview (reschedule)
// router.put("/interviews/:interviewId", auth, role("recruiter"), interviewCtrl.updateInterview);

// // Cancel interview
// router.patch("/interviews/:interviewId/cancel", auth, role("recruiter"), interviewCtrl.cancelInterview);

// // Update interview status
// router.patch("/interviews/:interviewId/status", auth, interviewCtrl.updateInterviewStatus);

// // Get candidate's interviews
// router.get("/candidates/:candidateId/interviews", auth, interviewCtrl.getCandidateInterviews);

// // Get recruiter's interviews
// router.get("/recruiters/:recruiterId/interviews", auth, interviewCtrl.getRecruiterInterviews);

// // Get job's interviews
// router.get("/jobs/:jobId/interviews", auth, interviewCtrl.getJobInterviews);


// // ========== CALENDAR INTEGRATION ROUTES ==========

// // Sync with Google Calendar
// router.post("/calendar/google/sync", auth, calendarCtrl.syncGoogleCalendar);

// // Get calendar events
// router.get("/calendar/events", auth, calendarCtrl.getCalendarEvents);

// // Check calendar conflicts
// router.post("/calendar/check-conflicts", auth, calendarCtrl.checkConflicts);


// // ========== NOTIFICATION ROUTES (if needed) ==========

// // Send interview reminder
// router.post("/interviews/:interviewId/reminder", auth, role("recruiter"), interviewCtrl.sendReminder);


// module.exports = router;