// Components/Signup_page/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../../assets/logo.jpg';
import { useTranslation } from 'react-i18next';

const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*]/.test(password),
    };
  };

  const passwordValidations = validatePassword(form.password);
  const allValid = Object.values(passwordValidations).every(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError(t('signup.passwordsDoNotMatch'));
      return;
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || t('signup.signupFailed'));
        return;
      }

      navigate('/login');
    } catch (err) {
      setError(t('signup.generalError'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Logo" className="h-16 w-16 mb-2 rounded-full" />
          <h2 className="text-2xl font-bold">{t('nex')}</h2>
          <p className="text-sm text-gray-400">{t('signup.createAccount')}</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">{t('signup.name')}</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
              placeholder={t('signup.namePlaceholder')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t('signup.surname')}</label>
            <input
              type="text"
              name="surname"
              value={form.surname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
              placeholder={t('signup.surnamePlaceholder')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t('signup.email')}</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t('signup.password')}</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10 placeholder-gray-400"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400"
                onClick={togglePassword}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {passwordFocused && (
              <div className="mt-2 space-y-1 text-sm">
                <p className={passwordValidations.length ? 'text-green-500' : 'text-red-500'}>
                  • {t('signup.min8')}
                </p>
                <p className={passwordValidations.uppercase ? 'text-green-500' : 'text-red-500'}>
                  • {t('signup.uppercase')}
                </p>
                <p className={passwordValidations.lowercase ? 'text-green-500' : 'text-red-500'}>
                  • {t('signup.lowercase')}
                </p>
                <p className={passwordValidations.number ? 'text-green-500' : 'text-red-500'}>
                  • {t('signup.number')}
                </p>
                <p className={passwordValidations.special ? 'text-green-500' : 'text-red-500'}>
                  • {t('signup.symbol')}
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">{t('signup.confirmPassword')}</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10 placeholder-gray-400"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400"
                onClick={toggleConfirmPassword}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={!allValid}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition disabled:opacity-50"
          >
            {t('signup.signUp')}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          {t('signup.haveAccount')}{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-indigo-400 hover:underline font-medium"
          >
            {t('signup.signIn')}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
