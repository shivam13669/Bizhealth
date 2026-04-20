import emailjs from 'emailjs-com';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'BrLoOUw__GnYDfcAM';
const EMAILJS_SERVICE_ID = 'service_r6rslob';
const EMAILJS_TEMPLATE_ID = 'template_xkwtb9r';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  company?: string;
  requirement?: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        requirement: formData.requirement || 'Not provided',
        message: formData.message,
        to_email: '360bizhealth@gmail.com',
      }
    );
    
    return response.status === 200;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};
