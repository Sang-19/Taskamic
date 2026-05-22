# Taskamic - Productivity Dashboard 📋

A modern, full-featured **task management and productivity dashboard** that helps you stay organized, focused, and productive. Track daily tasks, set weekly goals, manage projects, and monitor your progress with beautiful visualizations and intelligent review prompts.

---

## ✨ Features

### 📝 Task Management
- ✅ **Daily Tasks** - Manage your daily to-do list with intuitive add/edit/delete functionality
- 🎯 **Weekly Goals** - Set strategic goals with priority levels (High, Medium, Low)
- 📦 **Projects** - Organize work into ongoing projects with deadlines
- 🔄 **Subtasks** - Break down complex tasks into smaller, manageable steps
- ⏱️ **Timers** - Built-in task timer to track work sessions

### 📊 Progress Tracking
- 📈 **Weekly Activity Graph** - Visualize task completion across 7 days
- 🔥 **Streak Badges** - Track consecutive days of reviews with fire emoji
- ✍️ **Daily Reviews** - Reflect on wins, distractions, and priorities
- 📅 **Deadline Tracker** - Monitor upcoming deadlines at a glance
- 📥 **CSV Export** - Download all reviews for external analysis

### 🔐 Authentication & Cloud Sync
- 🔑 **Email/Password Auth** - Secure account creation and login
- 🔗 **Google Sign-in** - One-click authentication with Google
- ☁️ **Firestore Sync** - Automatic cloud backup and multi-device sync
- 💾 **Offline Support** - Works offline with automatic sync when online
- 👥 **User Limit** - Supports up to 50 concurrent user accounts

### 💬 Feedback System
- 📬 **Feedback Form** - Built-in modal for user feedback collection
- 📧 **Google Form Integration** - Feedback automatically submitted to Google Form
- ✅ **Backend Processing** - Secure Node.js backend handles submissions

### 🎨 User Experience
- 🌙 **Dark Theme** - Beautiful dark interface with purple gradient accents
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⌨️ **Keyboard Navigation** - Press Enter to add items quickly
- 🎯 **Inline Editing** - Double-click any task to edit it
- 🔔 **Toast Notifications** - Real-time feedback on actions

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and gradients
- **JavaScript (ES6+)** - Dynamic interactions and state management
- **Firebase Authentication** - User authentication and Google OAuth
- **Firestore** - Real-time cloud database
- **Local Storage** - Browser-based persistence

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Axios** - HTTP client
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment configuration

### Infrastructure
- **Firebase Console** - Database and authentication management
- **Google Forms** - Feedback collection and storage

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Python** (for running HTTP server) - [Download](https://www.python.org/)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- **Git** (optional, for cloning)

---

## 🚀 Quick Start

### 1. Clone or Download the Repository

```bash
git clone https://github.com/yourusername/taskamic.git
cd taskamic
```

Or download the ZIP file and extract it.

### 2. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - Cross-origin resource sharing
- `axios` - HTTP requests
- `dotenv` - Environment variables

### 3. Configure Environment

Create a `.env` file in the project root:

```env
# Backend Configuration
PORT=3000
NODE_ENV=production

# Google Form Configuration
GOOGLE_FORM_ID=your_form_id_here
FEEDBACK_FIELD_ENTRY_ID=your_feedback_field_entry_id_here
```

**How to get these values:**

#### Get Google Form ID:
1. Open your Google Form
2. Click the three dots ⋯ → "Get pre-filled link"
3. Copy the URL and extract the `FORM_ID` from: `https://docs.google.com/forms/d/FORM_ID/viewform`

#### Get Feedback Field Entry ID:
1. Open your Google Form
2. Right-click on the feedback text field
3. Click "Inspect" (Developer Tools)
4. Find `name="entry.XXXXXXXXX"`
5. Copy the number after `entry.`

### 4. Start the Servers

**Terminal 1 - Frontend Server:**
```bash
python -m http.server 8000
```
Then open: http://localhost:8000

**Terminal 2 - Backend Server:**
```bash
npm start
```
Backend runs at: http://localhost:3000

### 5. Access the Application

Open your browser and navigate to: **http://localhost:8000**

---

## 📚 Usage Guide

### Creating Your First Task

1. **Sign Up** - Create a new account with email/password or Google
2. **Add Daily Task** - Type in the input field and click "Add"
3. **Track Progress** - Click "Done" to mark tasks complete
4. **View Stats** - See your daily, weekly, project, and review counts

### Managing Tasks

| Action | How |
|--------|-----|
| **Edit Task** | Double-click the task text |
| **Mark Done** | Click the ✓ (Done) button |
| **Delete Task** | Click the 🗑️ (Delete) button |
| **Start Timer** | Click the ⏱️ (Timer) button |
| **Add Subtask** | Click "Add Subtask" and fill the form |
| **Promote to Daily** | Click "+ Today" button |

### Weekly Goals & Projects

- Set priority levels: **High** (red), **Medium** (yellow), **Low** (green)
- Set deadlines using the date picker
- Expand goals/projects to see subtasks
- Same edit/delete/promote functionality

### Daily Review

- Answer three questions:
  1. **What did I complete today?** - Your wins
  2. **What distracted me?** - Obstacles faced
  3. **Tomorrow's #1 Task** - Your top priority

- Click "Save Review" to record
- Click "Download All Reviews (CSV)" to export

### Feedback

- Click the **💬 Feedback** button in the header
- Write your feedback in the modal
- Click "Send Feedback" to submit
- Feedback is automatically sent to the Google Form

---

## 📂 Project Structure

```
taskamic/
├── index.html              # Main application file (HTML + CSS + JS)
├── backend.js              # Express backend server
├── package.json            # NPM dependencies
├── .env                    # Environment configuration (create this)
├── .env.example            # Example environment template
├── README.md               # This file
├── BACKEND_SETUP_GUIDE.md  # Backend setup instructions
├── FIRESTORE_QUOTA_GUIDE.md# Database quota information
└── setup_guide.md          # General setup documentation
```

---

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```
Response:
```json
{
  "status": "Server is running",
  "timestamp": "2026-05-22T06:11:10.102Z"
}
```

### Submit Feedback
```
POST /api/submit-feedback
Content-Type: application/json

{
  "feedbackMessage": "User feedback text",
  "userEmail": "user@example.com",
  "userName": "User Display Name"
}
```

Response (Success):
```json
{
  "success": true,
  "message": "Feedback sent successfully! Thank you for your input.",
  "timestamp": "2026-05-22T06:11:15.941Z"
}
```

Response (Error):
```json
{
  "success": false,
  "message": "Feedback message cannot be empty"
}
```

---

## 🔐 Security Features

✅ **Input Validation** - All inputs validated before processing  
✅ **CORS Enabled** - Only authorized requests accepted  
✅ **Environment Variables** - Sensitive data kept secure  
✅ **Firebase Security** - Google-managed authentication  
✅ **User Limit** - Prevents abuse with 50-user capacity limit  
✅ **Error Handling** - Graceful error messages without sensitive info  
✅ **HTTPS Ready** - Configured for secure deployment  

---

## 🗄️ Database Structure (Firestore)

### User Data Collection
```
userData/
├── [USER_ID]/
│   ├── daily: Array
│   │   └── {id, text, done, doing, timer, completedAt, subtasks}
│   ├── weekly: Array
│   │   └── {id, text, priority, deadline, done, subtasks}
│   ├── project: Array
│   │   └── {id, text, deadline, done, subtasks}
│   ├── reviews: Array
│   │   └── {date, wins, distractions, tomorrow, timestamp}
│   └── lastActiveDate: String (ISO date)
```

### Config Collection
```
config/
└── userStats/
    └── totalUsers: Number (for 50-user limit)
```

---

## 📊 Firebase Quota Information

**Free Tier Limits:**
- ✅ **50,000 reads/month** - Sufficient for 100+ users
- ✅ **19,000 writes/month** - Sufficient for daily usage
- ✅ **5,000 deletes/month** - Cleanup operations
- ✅ **1 GB storage** - Enough for years of data

*For production deployments with more users, upgrade to paid plan.*

---

## 🚀 Deployment

### Deploy Frontend (Static Hosting)

**Option 1: Firebase Hosting**
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

**Option 2: GitHub Pages**
1. Push to GitHub repository
2. Enable GitHub Pages in Settings
3. Choose `main` branch as source

**Option 3: Vercel**
1. Connect GitHub repository to Vercel
2. Deploy automatically on every push

### Deploy Backend (Server Hosting)

**Option 1: Heroku**
```bash
heroku create taskamic-backend
git push heroku main
```

**Option 2: Railway.app**
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

**Option 3: DigitalOcean**
1. Create Droplet with Node.js
2. Clone repository
3. Run `npm install && npm start`
4. Use PM2 for process management

---

## 🐛 Troubleshooting

### Frontend Issues

**Page shows blank/loading**
- Check if backend is running: `npm start`
- Clear browser cache: `Ctrl+Shift+R`
- Check console for errors: `F12` → Console tab

**Tasks not saving**
- Verify Firestore is accessible
- Check browser's localStorage (DevTools → Application)
- Ensure user is authenticated

**Google Sign-in not working**
- Verify Firebase credentials in code
- Check popup blocker settings
- Clear browser cookies

### Backend Issues

**Backend won't start**
```
Error: Cannot find module 'express'
```
Solution: Run `npm install`

**Feedback not submitting**
```
Error: ENOTFOUND localhost
```
Solution: Check if frontend server is running

**Google Form submission fails**
- Verify `GOOGLE_FORM_ID` is correct
- Verify `FEEDBACK_FIELD_ENTRY_ID` is correct
- Check `.env` file has both values
- Restart backend: `npm start`

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| CORS Error | Backend not running | Start backend: `npm start` |
| 404 on /api/submit-feedback | Wrong endpoint | Verify backend URL is `http://localhost:3000` |
| "Server configuration incomplete" | Missing .env variables | Add GOOGLE_FORM_ID and FEEDBACK_FIELD_ENTRY_ID |
| Feedback not appearing | Wrong entry ID | Re-inspect Google Form field |

---

## 📈 Features Roadmap

- [ ] Dark/Light theme toggle
- [ ] Custom categories and tags
- [ ] Advanced analytics dashboard
- [ ] Recurring tasks
- [ ] Team collaboration
- [ ] Mobile app (React Native)
- [ ] Email reminders
- [ ] Integration with calendar apps
- [ ] AI-powered productivity insights
- [ ] Time tracking enhancements

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/taskamic.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

MIT License Summary:
- ✅ Free to use, modify, and distribute
- ✅ Include original license in distributions
- ⚠️ No warranty or liability

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- Website: [yourwebsite.com](https://yourwebsite.com)

---

## 🙏 Acknowledgments

- **Firebase** - Backend infrastructure and authentication
- **Google Forms** - Feedback collection
- **Express.js** - Web server framework
- **Inter Font** - Beautiful typography
- All contributors and users

---

## 📞 Support

Need help? Here are some resources:

- **Documentation** - See BACKEND_SETUP_GUIDE.md
- **Issues** - Create a GitHub issue
- **Discussions** - Start a discussion thread
- **Email** - your.email@example.com

---

## 🎯 Quick Links

- 📖 [Full Documentation](./docs)
- 🐛 [Report Bug](https://github.com/yourusername/taskamic/issues)
- ✨ [Request Feature](https://github.com/yourusername/taskamic/issues)
- 📢 [Changelog](./CHANGELOG.md)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/taskamic?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/taskamic?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/taskamic?style=social)

---

## 🔄 Version History

### v1.0.0 (May 22, 2026)
- ✅ Initial release
- ✅ Daily tasks, weekly goals, projects
- ✅ Firebase authentication
- ✅ Firestore cloud sync
- ✅ Feedback collection
- ✅ Weekly activity tracking
- ✅ Daily reviews with CSV export
- ✅ 50-user signup limit

---

## 📱 Screenshots

### Dashboard
The main dashboard displaying all tasks, goals, and projects in a beautiful grid layout.

### Weekly Activity
Visual graph showing task completion across the week with hover tooltips.

### Daily Review
Reflection interface for capturing wins, distractions, and tomorrow's priority.

### Authentication
Beautiful glassmorphic auth card with email/password and Google sign-in options.

---

## 🎨 Design & Branding

**Taskamic** uses a modern dark theme with:
- **Primary Color**: Purple (#7c6aff)
- **Background**: Dark (#0e0e12)
- **Accent**: White & Purple gradient
- **Font**: Inter (Google Fonts)
- **Responsive**: Mobile-first design

---

## ⚖️ License Text

```
MIT License

Copyright (c) 2026 Taskamic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🎓 Learning Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Express.js Guide](https://expressjs.com/)
- [Google Forms API](https://developers.google.com/forms)
- [Web APIs MDN](https://developer.mozilla.org/en-US/docs/Web/API)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)

---

**Made with ❤️ by Taskamic Team**

⭐ If you find this project helpful, please star it on GitHub!

---

*Last updated: May 22, 2026*
