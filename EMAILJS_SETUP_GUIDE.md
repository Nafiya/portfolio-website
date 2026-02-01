# EmailJS Setup Guide

Your contact form is now configured to send emails directly from the frontend using EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the sidebar
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **Connect Account**
   - Sign in with your Gmail account (sdnafiya6@gmail.com)
   - Allow EmailJS to send emails on your behalf
4. **Copy the Service ID** - you'll need this later (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Configure your template:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **To email**: sdnafiya6@gmail.com

### Email Content:
Replace the default template with this:

**Subject:**
```
New Contact from {{from_name}} - {{subject}}
```

**Body:**
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **Save** and **copy the Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** (top right)
2. Click **General** tab
3. Find your **Public Key** (looks like: `xxxxxxxxxxxxxxx`)
4. Copy this key

## Step 5: Update Your Code

Open `src/app/app.component.ts` and replace these placeholders (around line 71-73):

```typescript
const SERVICE_ID = 'YOUR_SERVICE_ID';  // Replace with your service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // Replace with your public key
```

With your actual values:

```typescript
const SERVICE_ID = 'service_xxxxxxx';  // Your actual service ID
const TEMPLATE_ID = 'template_xxxxxxx'; // Your actual template ID
const PUBLIC_KEY = 'xxxxxxxxxxxxxxx';   // Your actual public key
```

## Step 6: Test the Form

1. Run your application: `npm start`
2. Navigate to the contact form
3. Fill in all fields and click "Send Message"
4. Check your email (sdnafiya6@gmail.com) for the message

## Troubleshooting

### Email not received?
- Check your spam folder
- Verify all IDs are correct in the code
- Check EmailJS dashboard for error logs
- Ensure Gmail account is properly connected

### "Failed to send" error?
- Check browser console for specific error
- Verify your Public Key is correct
- Ensure you're not exceeding the free tier limit (200 emails/month)

### Template variables not working?
- Make sure template uses double curly braces: `{{variable_name}}`
- Variable names must match exactly: `from_name`, `from_email`, `subject`, `message`

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- Unlimited templates
- Email tracking

Perfect for a personal portfolio!

## Security Note

The Public Key is safe to expose in frontend code - it's designed for client-side use. Your Service ID and Template ID are also public-facing identifiers.

## Alternative: Environment Variables (Optional)

For better practice, you can move these to environment files:

1. Create `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'service_xxxxxxx',
    templateId: 'template_xxxxxxx',
    publicKey: 'xxxxxxxxxxxxxxx'
  }
};
```

2. Update app.component.ts to import from environment:
```typescript
import { environment } from '../environments/environment';

// In handleContactForm method:
const SERVICE_ID = environment.emailjs.serviceId;
const TEMPLATE_ID = environment.emailjs.templateId;
const PUBLIC_KEY = environment.emailjs.publicKey;
```

## Support

If you encounter any issues:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Your contact form is ready to use once you complete these steps!** 🎉
