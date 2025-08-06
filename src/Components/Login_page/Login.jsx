import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import logo from '../../assets/logo.jpg';
import { API_BASE_URL } from '../../utils/api';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || t('login.errorGeneric'));
        return;
      }

      // ✅ Store token and user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      toast.success(t('login.success'));

      // ✅ Redirect to homepage
      navigate('/');
    } catch (err) {
      toast.error(t('login.errorGeneric'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6">
        <div className="flex flex-col items-center">
          <img src={logo} alt="NEX ARCHITECTS Logo" className="h-16 w-16 mb-2 rounded-full" />
          <h2 className="text-2xl font-bold text-white">NEX ARCHITECTS</h2>
          <p className="text-sm text-gray-400">{t('login.subtitle')}</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-200">{t('login.email')}</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white placeholder-gray-400 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">{t('login.password')}</label>
            <div className="relative mt-1">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white placeholder-gray-400 rounded-xl pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={t('login.passwordPlaceholder')}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400"
                onClick={togglePassword}
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="text-right mt-2">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition"
              >
                Forgot your password?
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            {t('login.signIn')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          {t('login.noAccount')}{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-indigo-400 hover:text-indigo-300 hover:underline font-medium"
          >
            {t('login.signUp')}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
