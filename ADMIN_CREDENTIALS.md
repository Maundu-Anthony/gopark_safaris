# Admin Credentials Configuration

## Location
Admin credentials are now stored in `db.json` for easy management.

## How to Update Credentials

1. Open `/db.json`
2. Find the `admin` section at the top:
```json
{
  "admin": {
    "email": "admin@goparksafaris.com",
    "password": "admin123",
    "name": "Admin"
  },
  ...
}
```

3. Update the values:
   - **email**: Your admin email address
   - **password**: Your admin password
   - **name**: Admin display name

4. Save the file

## Important: Running the JSON Server

For the admin login to work, you **MUST** have the JSON server running:

```bash
# Terminal 1 - Run the JSON server
yarn server

# Terminal 2 - Run the React app
yarn start
```

The JSON server runs on `http://localhost:3001` and provides the admin credentials to the authentication system.

## Default Credentials

**Email:** `admin@goparksafaris.com`  
**Password:** `admin123`

⚠️ **CHANGE THESE** before deploying to production!

## Security Notes

### For Development
- Current setup is perfect for local development
- Credentials stored in `db.json` are easy to update
- No need for complex authentication during development

### For Production
You should implement one of these solutions:

1. **Backend API with Hashed Passwords**
   - Store credentials in a real database
   - Hash passwords using bcrypt or similar
   - Implement JWT tokens for sessions

2. **Environment Variables**
   - Move credentials to `.env` file
   - Never commit `.env` to git
   - Use environment-specific configs

3. **Third-Party Authentication**
   - Use services like Auth0, Firebase Auth
   - OAuth integration
   - Multi-factor authentication

## Troubleshooting

### "Unable to connect to server" error
- Make sure `yarn server` is running in a separate terminal
- Check that JSON server is on port 3001
- Verify `db.json` exists and has valid JSON

### Login not working after changing credentials
- Restart the JSON server: `yarn server`
- Clear browser localStorage (F12 → Application → Local Storage → Clear)
- Double-check JSON syntax in `db.json`
