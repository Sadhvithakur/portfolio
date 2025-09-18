// Test EmailJS Configuration
// Run this in browser console to test your EmailJS setup

console.log('Testing EmailJS Configuration...');

// Check if environment variables are loaded
const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

console.log('Service ID:', serviceId);
console.log('Template ID:', templateId);
console.log('Public Key:', publicKey ? 'Set' : 'Not set');

if (!serviceId || serviceId.includes('your_')) {
    console.error('❌ Service ID not configured properly');
}

if (!templateId || templateId.includes('your_')) {
    console.error('❌ Template ID not configured properly');
}

if (!publicKey || publicKey.includes('your_')) {
    console.error('❌ Public Key not configured properly');
}

if (serviceId && templateId && publicKey &&
    !serviceId.includes('your_') &&
    !templateId.includes('your_') &&
    !publicKey.includes('your_')) {
    console.log('✅ All EmailJS variables are configured!');
}

// Test function (uncomment to run a test email)
/*
import emailjs from '@emailjs/browser';

emailjs.send(serviceId, templateId, {
  name: 'Test User',
  email: 'test@example.com',
  message: 'This is a test message from your portfolio!'
}, publicKey)
.then(() => {
  console.log('✅ Test email sent successfully!');
})
.catch((error) => {
  console.error('❌ Test email failed:', error);
});
*/