import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    temporaryPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate email is the company email
    if (formData.email !== 'info@goparksafaris.co.ke') {
      setError('Invalid email address. Only the company admin email is allowed.');
      return;
    }

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    // Validate password strength
    if (formData.newPassword.length < 8) {
      setError('New password must be at least 8 characters long');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://gopark-safaris-backend.vercel.app/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          temporaryPassword: formData.temporaryPassword,
          newPassword: formData.newPassword
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Password reset successful! You can now login with your new password.');
        navigate('/admin/login');
      } else {
        setError(data.error || 'Failed to reset password');
      }
    } catch (err) {
      setError('Unable to connect to server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-warm-khaki flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img 
            src="/images/logo.jpg" 
            alt="GoPark Safaris" 
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-safari-olive">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-dark-leather">
            Enter your temporary password and set a new password
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-leather mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sunset-orange focus:border-sunset-orange sm:text-sm"
                placeholder="info@goparksafaris.co.ke"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="temporaryPassword" className="block text-sm font-medium text-dark-leather mb-1">
                Temporary Password
              </label>
              <input
                id="temporaryPassword"
                name="temporaryPassword"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sunset-orange focus:border-sunset-orange sm:text-sm"
                placeholder="Enter temporary password from email"
                value={formData.temporaryPassword}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-dark-leather mb-1">
                New Password
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sunset-orange focus:border-sunset-orange sm:text-sm"
                placeholder="Minimum 8 characters"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-dark-leather mb-1">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sunset-orange focus:border-sunset-orange sm:text-sm"
                placeholder="Re-enter new password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sunset-orange hover:bg-sunset-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sunset-orange disabled:opacity-50"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>

            <button
              type="button"
              onClick={() => navigate('/admin/login')}
              className="w-full flex justify-center py-2 px-4 border border-safari-olive text-sm font-medium rounded-md text-safari-olive bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safari-olive"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
