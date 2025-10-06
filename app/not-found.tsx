"use client";

import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - GIHCR Education Institute",
  description: "The page you're looking for doesn't exist. Return to GIHCR Education Institute.",
};

export default function NotFound() {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="light"
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
              Page not found
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <a
              href="/"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Go back home
            </a>
            <a
              href="/contact"
              className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}