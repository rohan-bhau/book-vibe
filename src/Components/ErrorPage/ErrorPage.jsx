import React from 'react';
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
      const navigate = useNavigate();

    return (
      <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
        <h1 class="text-7xl font-extrabold text-gray-900">404</h1>

        <h2 class="mt-4 text-2xl font-semibold text-gray-700">
          Page not found
        </h2>

        <p class="mt-2 text-gray-500 max-w-md">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or the URL might be incorrect.
        </p>

        <div class="mt-6 flex gap-4">
          <a
            href="/"
            class="px-5 py-2.5 bg-black text-white rounded-xl shadow hover:bg-gray-800 transition"
          >
            Go Home
          </a>
          <button
            onClick={() => navigate(-1)}
            class="px-5 py-2.5 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

        <p class="mt-8 text-sm text-gray-400">Need help? Contact support</p>
      </div>
    );
}

export default ErrorPage;
