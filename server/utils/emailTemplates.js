export function generateForgotPasswordEmailTemplate(resetPasswordUrl) {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
    
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="color: #3b82f6; margin: 0;">PASSWORD RESET REQUEST - FYP MANAGEMENT SYSTEM</h2>
      <p style="font-size: 14px; color: #6b7280; margin: 5px 0 0;">
        Final Year Project Management System
      </p>
    </div>

    <!-- Body -->
    <p style="font-size: 16px; color: #374151;">Dear User,</p>
    <p style="font-size: 16px; color: #374151;">
      We received a request to reset your account password for the Final Year Management Management System.
      Please click the button below to create a new password.
    </p>

    <!-- Button -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="${resetPasswordUrl}"
         style="display: inline-block; font-size: 16px; font-weight: bold; color: #ffffff; text-decoration: none; background-color: #3b82f6; padding: 12px 24px; border-radius: 6px;">
         Reset Password
      </a>
    </div>

    <p style="font-size: 15px; color: #374151;">
      If you did not request this password reset, you can safely ignore this email.
      This link will expire in <b>10 minutes</b>.
    </p>

    <p style="font-size: 15px; color: #374151;">
      If the button above does not work, copy and paste the following link into your browser:
    </p>

    <!-- Link -->
    <p style="font-size: 14px; color: #3b82f6; word-wrap: break-word;">
      ${resetPasswordUrl}
    </p>

    <!-- Footer -->
    <footer style="margin-top: 30px; text-align: center; font-size: 14px; color: #6b7280;">
      <p>Thank you,<br><strong>FYP Management System Team</strong></p>
      <p style="font-size: 12px; color: #9ca3af;">
        This is an automated message from the Final Year Project Management System. Please do not reply to this email.
      </p>
    </footer>

  </div>
  `;
}