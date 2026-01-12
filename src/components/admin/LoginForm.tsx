import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  onLogin: (success: boolean, token?: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login.php`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('admin_token', data.token);
        onLogin(true, data.token);
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setError('Connection error. Please check your internet or server URL.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
      
      {/* Header */}
      <div className="px-6 pt-10 pb-6 sm:p-8 sm:pt-12 text-center">
        <div className="w-24 h-24 sm:w-16 sm:h-16  rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-indigo-200">
          <Link to="/" className="flex items-center">
            <h1>Hello</h1>
          </Link>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-gray-800 tracking-tight">
          Admin Portal
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-1">
          Enter your database credentials
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="px-6 pb-8 sm:p-8 space-y-5 sm:space-y-6"
      >
        {error && (
          <div className="bg-red-50 text-red-600 p-3 sm:p-4 rounded-xl text-xs font-semibold border border-red-100">
            <i className="fas fa-exclamation-circle mr-2"></i>
            {error}
          </div>
        )}

        {/* Email */}
        <div className="space-y-2">
          <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
            Email Address
          </label>
          <div className="relative group">
            <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-indigo-600 transition-colors"></i>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm sm:text-base text-gray-700"
              placeholder="Your database email..."
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
            Password
          </label>
          <div className="relative group">
            <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-indigo-600 transition-colors"></i>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm sm:text-base text-gray-700"
              placeholder="Your database password..."
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 sm:py-4 bg-accent text-white rounded-xl sm:rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.97] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <i className="fas fa-circle-notch fa-spin"></i>
          ) : (
            <>
              Login
              <i className="fas fa-arrow-right text-sm opacity-50"></i>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
