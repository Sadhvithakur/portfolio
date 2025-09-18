# EmailJS Setup Guide for Portfolio Contact Form

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail**: Most common choice
   - **Outlook/Hotmail**: Microsoft emails
   - **Yahoo**: Yahoo emails
   - **Custom SMTP**: For other providers

### For Gmail (Recommended):
1. Select "Gmail"
2. Click "Connect Account"
3. Sign in with your Gmail account
4. Grant permissions
5. **Copy the Service ID** (looks like: service_abcd1234)

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Set up the template:

**Template Name**: Portfolio Contact Form

**Subject**: 
```
New Message from {{name}} - Portfolio Contact
```

**Content**:
```
Hello,

You have received a new contact form submission from your portfolio website:

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
Time: {{reply_to}}
```

4. Click "Save"
5. **Copy the Template ID** (looks like: template_xyz9876)

## Step 4: Get Public Key
1. Go to "Account" in the left sidebar
2. Click "General"
3. Find "Public Key" section
4. **Copy your Public Key** (looks like: AbCdEfGhIjKlMnOp)

## Step 5: Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_your_actual_id
VITE_APP_EMAILJS_TEMPLATE_ID=template_your_actual_id  
VITE_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Setup
1. Save all files
2. Restart your development server: `npm run dev`
3. Go to your contact form
4. Fill out and submit a test message
5. Check your email for the message

## Troubleshooting
- Make sure all three values are correct in `.env`
- Restart your dev server after changing `.env`
- Check browser console for any errors
- Verify your email service is connected in EmailJS dashboard
- Check EmailJS dashboard logs for failed sends

## Security Notes
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Public key is safe to use in frontend (it's meant to be public)
- Service ID and Template ID are also safe for frontend use