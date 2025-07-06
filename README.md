# Creating-Google-Web-App
Collecting Data with Google Sheet embedded in scrip.google and claude front end. 
# 📊 Webinar Feedback System

A complete feedback collection system for the **3-Day Prompt Mastery Webinar Series** by GENAI-ERA. This system automatically saves responses to Google Sheets with a beautiful, responsive web interface.

## 🌟 Features

- **Beautiful UI**: Professional gradient design with responsive layout
- **Real-time Data**: Automatic saving to Google Sheets
- **Comprehensive Survey**: Ratings, checkboxes, and open-ended questions
- **Mobile Friendly**: Works perfectly on all devices
- **No Database Required**: Uses Google Sheets as backend
- **Instant Deployment**: Ready to use HTML file

## 🚀 Live Demo

[View Live Form](https://your-username.github.io/webinar-feedback-system/) *(Update with your GitHub Pages URL)*

## 📋 What It Collects

### Personal Information
- Full Name
- Email Address
- Country
- Session Attended

### Session Evaluation
- Overall session rating (1-5 stars)
- Content quality rating
- Facilitator performance rating

### Learning Outcomes
- Most valuable aspects (multiple choice)
- Learning objectives achievement
- Confidence in applying knowledge

### Detailed Feedback
- What participants liked most
- Suggestions for improvement
- Recommendation likelihood
- Future topic suggestions
- Additional comments

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Google Apps Script
- **Database**: Google Sheets
- **Hosting**: GitHub Pages / Google Sites / Netlify

## 📁 File Structure

```
webinar-feedback-system/
├── README.md                 # This file
├── index.html               # Main feedback form
├── google-apps-script.js    # Backend script for Google Sheets
├── screenshots/             # Form screenshots
│   ├── form-desktop.png
│   └── form-mobile.png
└── docs/                   # Documentation
    ├── setup-guide.md
    └── deployment-guide.md
```

## ⚡ Quick Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/webinar-feedback-system.git
cd webinar-feedback-system
```

### 2. Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Webinar Feedback Responses"
4. Copy the Sheet ID from the URL

### 3. Deploy Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Create new project
3. Copy and paste code from `google-apps-script.js`
4. Update the `SHEET_ID` with your Google Sheet ID
5. Deploy as Web App
6. Copy the deployment URL

### 4. Update HTML Form
1. Open `index.html`
2. Replace `GOOGLE_SCRIPT_URL` with your deployment URL
3. Save the file

### 5. Deploy
Choose one of these options:
- **GitHub Pages**: Enable in repository settings
- **Google Sites**: Embed the HTML code
- **Netlify**: Drag and drop the HTML file
- **Local**: Double-click `index.html`

## 🔧 Configuration

### Google Apps Script Variables
```javascript
// Update this with your Google Sheet ID
var SHEET_ID = "your-google-sheet-id-here";
```

### HTML Form Variables
```javascript
// Update this with your deployed Google Apps Script URL
const GOOGLE_SCRIPT_URL = 'your-google-apps-script-url-here';
```

## 📊 Data Structure

The Google Sheet will automatically create these columns:

| Column | Description | Type |
|--------|-------------|------|
| Timestamp | Submission time | DateTime |
| Name | Participant name | Text |
| Email | Email address | Text |
| Country | Participant country | Text |
| Session Attended | Which session(s) | Text |
| Overall Rating | 1-5 star rating | Number |
| Content Rating | 1-5 star rating | Number |
| Facilitator Rating | 1-5 star rating | Number |
| Most Valuable Aspects | Comma-separated values | Text |
| Learning Objectives Met | Dropdown selection | Text |
| Confidence Level | Dropdown selection | Text |
| What You Liked Most | Open text | Text |
| Suggestions for Improvement | Open text | Text |
| Would Recommend | Dropdown selection | Text |
| Future Topics | Open text | Text |
| Additional Comments | Open text | Text |

## 🎨 Customization

### Colors and Branding
The form uses GENAI-ERA brand colors:
- Primary Orange: `#FF6B35`
- Secondary Orange: `#F7931E`
- Background Gradient: `#667eea` to `#764ba2`

To customize:
1. Update CSS variables in the `<style>` section
2. Replace logo/branding text in the header
3. Modify form fields as needed

### Adding/Removing Questions
1. Update the HTML form structure
2. Modify the JavaScript data collection
3. Update the Google Apps Script to handle new fields
4. Add corresponding columns to the Google Sheet

## 📱 Screenshots

### Desktop View
![Desktop Form](screenshots/form-desktop.png)

### Mobile View
![Mobile Form](screenshots/form-mobile.png)

## 🔗 Deployment Options

### GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch
4. Get URL: `https://username.github.io/repository-name/`

### Google Sites (Free)
1. Go to [sites.google.com](https://sites.google.com)
2. Create new site
3. Add Embed block
4. Paste HTML code
5. Publish

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop HTML file
3. Get instant URL
4. Optional: Set custom domain

## 🛡️ Security & Privacy

- ✅ No sensitive data stored locally
- ✅ HTTPS encrypted transmission
- ✅ Google's security infrastructure
- ✅ No third-party tracking
- ✅ GDPR compliant data collection

## 📈 Analytics & Reporting

### Built-in Google Sheets Features
- **Charts**: Automatic visualization options
- **Filters**: Sort and filter responses
- **Export**: Download as Excel, CSV, PDF
- **Sharing**: Collaborate with team members
- **Real-time**: Live updates as responses come in

### Advanced Analytics
For detailed analytics, responses can be:
- Exported to Excel for advanced analysis
- Connected to Google Data Studio
- Imported into BI tools
- Analyzed with Python/R scripts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Credits

**Created for GENAI-ERA**
- 3-Day Prompt Mastery Webinar Series
- Facilitators: Benjamin Quarshie (PhD) & Vanessa Willemse

**Technical Implementation**
- Form Design: Custom CSS with gradient styling
- Backend: Google Apps Script integration
- Data Storage: Google Sheets API

## 📞 Support

For questions or support:
- **Email**: genai-era@gmail.com
- **Issues**: [GitHub Issues](https://github.com/your-username/webinar-feedback-system/issues)
- **Documentation**: Check the `docs/` folder

## 🗺️ Roadmap

### Version 2.0 (Planned)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Email notifications for new responses
- [ ] Bulk export features
- [ ] Custom branding options

### Version 1.1 (Current)
- [x] Basic feedback collection
- [x] Google Sheets integration
- [x] Responsive design
- [x] Star rating system
- [x] Multiple choice options

---

**⭐ If this project helped you, please give it a star!**

**🔄 Last Updated**: July 2025
