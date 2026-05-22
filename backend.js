const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// CONFIGURATION - Update these values
// ============================================
// Google Form ID (extract from: https://docs.google.com/forms/d/FORM_ID/viewform)
const GOOGLE_FORM_ID = process.env.GOOGLE_FORM_ID;

// Field entry ID for feedback text (get by inspecting form HTML)
// Look for: name="entry.XXXXXXXXX" where field is the text field
const FEEDBACK_FIELD_ENTRY_ID = process.env.FEEDBACK_FIELD_ENTRY_ID;

// Optional: Add more fields if needed
// const EMAIL_FIELD_ENTRY_ID = process.env.EMAIL_FIELD_ENTRY_ID;
// const NAME_FIELD_ENTRY_ID = process.env.NAME_FIELD_ENTRY_ID;

const GOOGLE_FORM_SUBMIT_URL = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

// ============================================
// FEEDBACK SUBMISSION ENDPOINT
// ============================================
app.post('/api/submit-feedback', async (req, res) => {
  try {
    const { feedbackMessage, userEmail, userName } = req.body;

    // Validation
    if (!feedbackMessage || feedbackMessage.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Feedback message cannot be empty'
      });
    }

    if (!GOOGLE_FORM_ID || !FEEDBACK_FIELD_ENTRY_ID) {
      return res.status(500).json({
        success: false,
        message: 'Server configuration incomplete. Contact administrator.'
      });
    }

    // Prepare form data to submit to Google Form
    const formData = new URLSearchParams();
    formData.append(`entry.${FEEDBACK_FIELD_ENTRY_ID}`, feedbackMessage);
    
    // Optional: Add email if field exists
    // if (EMAIL_FIELD_ENTRY_ID && userEmail) {
    //   formData.append(`entry.${EMAIL_FIELD_ENTRY_ID}`, userEmail);
    // }
    
    // Optional: Add name if field exists
    // if (NAME_FIELD_ENTRY_ID && userName) {
    //   formData.append(`entry.${NAME_FIELD_ENTRY_ID}`, userName);
    // }

    // Submit to Google Form
    const response = await axios.post(GOOGLE_FORM_SUBMIT_URL, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Taskamic/1.0'
      },
      validateStatus: () => true // Don't throw on any status code
    });

    // Google Forms returns 200 with redirect HTML on success
    if (response.status === 200) {
      console.log(`✅ Feedback submitted successfully for ${userEmail || 'anonymous'}`);
      
      return res.json({
        success: true,
        message: 'Feedback sent successfully! Thank you for your input.',
        timestamp: new Date().toISOString()
      });
    } else {
      console.error(`❌ Google Form submission failed: ${response.status}`);
      
      return res.status(500).json({
        success: false,
        message: 'Failed to submit feedback. Please try again.'
      });
    }

  } catch (error) {
    console.error('Error submitting feedback:', error.message);
    
    res.status(500).json({
      success: false,
      message: 'Server error occurred. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// ============================================
// HEALTH CHECK ENDPOINT
// ============================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// ============================================
// SERVER STARTUP
// ============================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Taskamic Backend running on http://localhost:${PORT}`);
  console.log(`📝 Feedback endpoint: POST http://localhost:${PORT}/api/submit-feedback`);
  console.log(`❤️  Health check: GET http://localhost:${PORT}/api/health`);
  
  if (!GOOGLE_FORM_ID || !FEEDBACK_FIELD_ENTRY_ID) {
    console.warn('⚠️  WARNING: Google Form configuration missing. Set environment variables:');
    console.warn('   - GOOGLE_FORM_ID');
    console.warn('   - FEEDBACK_FIELD_ENTRY_ID');
  }
});

// Error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
