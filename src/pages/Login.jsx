import React from "react";

export default function Login() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-extrabold text-gray-900">Login</h1>
        <p className="mt-1 text-sm text-gray-500">
          Sign in to manage listings and inquiries.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-neutral-900 px-6 py-3 text-white font-bold hover:bg-neutral-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
