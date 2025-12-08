# Password Reset API Endpoints

Your backend needs to implement these two endpoints for password reset functionality:

## 1. Forgot Password Endpoint

**POST** `https://gopark-safaris-backend.vercel.app/forgot-password`

### Request Body:
```json
{
  "email": "info@goparksafaris.co.ke"
}
```

### What it should do:
1. Verify the email matches the admin email in db.json
2. Generate a random 8-character temporary password
3. Hash the temporary password using SHA-256
4. Update the admin record with:
   - `temporaryPassword`: hashed temporary password
   - `temporaryPasswordExpiry`: timestamp (current time + 30 minutes)
5. Send email to the admin email with the temporary password (plain text)
6. Return success response

### Response:
```json
{
  "success": true,
  "message": "Temporary password sent to your email"
}
```

### Error Response:
```json
{
  "error": "Email not found"
}
```

---

## 2. Reset Password Endpoint

**POST** `https://gopark-safaris-backend.vercel.app/reset-password`

### Request Body:
```json
{
  "email": "info@goparksafaris.co.ke",
  "temporaryPassword": "ABC12345",
  "newPassword": "newSecurePassword123"
}
```

### What it should do:
1. Verify the email matches admin email
2. Hash the provided temporary password
3. Verify it matches the stored temporaryPassword hash
4. Check if temporaryPasswordExpiry is still valid (not expired)
5. Hash the new password using SHA-256
6. Update the admin record:
   - `passwordHash`: new password hash
   - `temporaryPassword`: null
   - `temporaryPasswordExpiry`: null
7. Return success response

### Response:
```json
{
  "success": true,
  "message": "Password reset successful"
}
```

### Error Responses:
```json
{
  "error": "Invalid or expired temporary password"
}
```

or

```json
{
  "error": "Email not found"
}
```

---

## Email Service Setup

You'll need to configure an email service (like SendGrid, Mailgun, or Nodemailer with Gmail) on your backend to send the temporary password email.

### Example Email Content:
```
Subject: Password Reset - GoPark Safaris Admin

Hello,

You requested a password reset for your GoPark Safaris admin account.

Your temporary password is: ABC12345

This temporary password will expire in 30 minutes.

Please use this to reset your password at:
https://gopark-safaris.vercel.app/admin/reset-password

If you didn't request this, please ignore this email.

Best regards,
GoPark Safaris System
```

---

## Security Notes:
- Temporary passwords should expire after 30 minutes
- Temporary passwords should be single-use (deleted after successful reset)
- All passwords should be hashed using SHA-256
- Rate limit the forgot-password endpoint to prevent spam
