'use client';

import { useSearchParams } from 'next/navigation';
import { useState,Suspense } from 'react';

  function SetPasswordForm() {
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [match, setMatch] = useState(true);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== cpassword) {
      setMatch(false);
      return;
    }

    setMatch(true);
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, hashpassword:password }),
      });

      if (response.ok) {
        setMessage('✅ Password updated successfully!');
      } else {
        setMessage('❌ Failed to update password.');
      }
    } catch (err) {
      setMessage('⚠️ Server error.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">Set Your Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              disabled
              value={name || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              disabled
              value={email || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              required
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          {!match && (
            <p className="text-red-600 text-sm">❌ Passwords do not match.</p>
          )}
          {message && (
            <p className={`text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
export default function SetPasswordPage() {
  <Suspense fallback={<div>Loading....</div>}>
    <SetPasswordForm/>
  </Suspense>

}
