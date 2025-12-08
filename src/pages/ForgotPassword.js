import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    // Validate that the email is the company email
    if (email !== 'info@goparksafaris.co.ke') {
      setError('Invalid email address. Only the company admin email is allowed.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://gopark-safaris-backend.vercel.app/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('A temporary password has been sent to your email. Please check your inbox.');
        setTimeout(() => {
          navigate('/admin/login');
        }, 3000);
      } else {
        setError(data.error || 'Failed to send reset email');
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
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-sm text-dark-leather">
            Enter your email to receive a temporary password
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              {message}
            </div>
          )}

          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sunset-orange focus:border-sunset-orange focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sunset-orange hover:bg-sunset-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sunset-orange disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Reset Email'}
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

export default ForgotPassword;
