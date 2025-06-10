'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (value: string, field: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const { email, password } = loginData;
    if (!email || !password) {
      setError('Please enter both email and password.');
      setIsSubmitting(false);
      return;
    }

    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (response?.ok) {
      router.push('/');
    } else {
      setError('Invalid credentials. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handleGoogleSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signIn('google');
  };

  return (
    <div className="min-h-screen bg-[#F8F4E1] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </h2>

        {/* Email */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={loginData.email}
          onChange={(e) => handleInput(e.target.value, 'email')}
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Enter your email"
        />

        {/* Password */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            value={loginData.password}
            onChange={(e) => handleInput(e.target.value, 'password')}
            className="w-full p-2 border rounded pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your password"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-2.5 right-3 text-gray-500 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Sign In */}
        <button
          type="submit"
          className="w-full bg-[#BF9264] text-white border-1 py-2 rounded hover:bg-purple-700 transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </button>

        {/* OR */}
        <div className="my-4 text-center text-sm text-gray-500">OR</div>

        {/* Google OAuth */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 border border-[#BF9264] py-2 rounded hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span>Sign in with Google</span>
        </button>
      </form>
    </div>
  );
}
