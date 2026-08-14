import { Resend } from 'resend';

const escapeHtml = (text) => {
  if (typeof text !== 'string') return text;
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const sendContactNotification = async (contact) => {
  try {
    const { RESEND_API_KEY, FROM_EMAIL, ADMIN_EMAIL } = process.env;

    if (!RESEND_API_KEY) {
      throw new Error('Missing required environment variable: RESEND_API_KEY');
    }
    if (!FROM_EMAIL) {
      throw new Error('Missing required environment variable: FROM_EMAIL');
    }
    if (!ADMIN_EMAIL) {
      throw new Error('Missing required environment variable: ADMIN_EMAIL');
    }

    const resend = new Resend(RESEND_API_KEY);
    const { name, email, company, country, services, service, message, createdAt } = contact;
    
    const formattedDate = new Date(createdAt).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    let servicesDisplay = 'N/A';
    if (Array.isArray(services) && services.length > 0) {
      servicesDisplay = services.join(', ');
    } else if (service) {
      servicesDisplay = service;
    }
    
    const textContent = `
New Contact Form Submission

Name:
${name}

Email:
${email}

Company:
${company || 'N/A'}

Country:
${country || 'N/A'}

Services Required:
${servicesDisplay}

Message:
${message}

Submitted At:
${formattedDate}
    `.trim();

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company) || 'N/A';
    const safeCountry = escapeHtml(country) || 'N/A';
    const safeServices = escapeHtml(servicesDisplay);
    const safeMessage = escapeHtml(message);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f5; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="background-color: #2563eb; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Submission</h2>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; width: 35%; font-weight: bold; color: #4b5563;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Company:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${safeCompany}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Country:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${safeCountry}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Services Required:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${safeServices}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Submitted At:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${formattedDate}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; color: #4b5563; margin-bottom: 10px;">Message:</p>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${safeMessage}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const senderString = FROM_EMAIL.includes('<') ? FROM_EMAIL : `ArthaNova Accounts <${FROM_EMAIL}>`;

    const { data, error } = await resend.emails.send({
      from: senderString,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: textContent,
      html: htmlContent
    });

    if (error) {
      console.error('Error sending email via Resend:', error);
    } else {
      console.log('✅ Contact notification email sent successfully.');
      if (data && data.id) {
        console.log(`Email ID: ${data.id}`);
      }
    }
    
    return data;
  } catch (error) {
    console.error('Failed to send contact notification email:', error);
  }
};
