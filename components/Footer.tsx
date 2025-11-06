'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Brand Section */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IS</span>
          </div>
          <span className="text-white text-xl font-bold">Imaginary Space</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Where innovation meets intelligence. Transforming ideas into intelligent solutions through cutting-edge AI technology.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856.17 10 10 0 00-7.737-4.247 10 10 0 00-10 10 10 10 0 00.1 2.1 10 10 0 00-7.737-4.247 10 10 0 00-10 10 10 10 0 00.1 2.1 10 10 0 002.856-3.51 10 10 0 01-2.856.17 10 10 0 007.737 4.247 10 10 0 0010-10 10 10 0 00-.1-2.1 10 10 0 007.737 4.247 10 10 0 0010-10 10 10 0 00-.1-2.1z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="white" d="M12 7a5 5 0 110 10 5 5 0 010-10zm6-2a1 1 0 110-2 1 1 0 010 2z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.515zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.192 0 1.915.753 1.94 1.708 0 .949-.748 1.707-1.988 1.707zm1.582 11.019H3.819V9.934h3.1v10.518zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
        <nav className="space-y-2 flex flex-col">
          <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            AI Solutions
          </a>
          <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Machine Learning
          </a>
          <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Data Analytics
          </a>
          <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Consulting
          </a>
          <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Custom Development
          </a>
        </nav>
      </div>

      {/* Company Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
        <nav className="space-y-2 flex flex-col">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Home
          </Link>
          <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            About Us
          </Link>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Blog
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Careers
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Contact
          </a>
        </nav>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col">
        <h3 className="text-white text-lg font-semibold mb-6">Get In Touch</h3>
        <div className="space-y-4 flex flex-col">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
            <a href="mailto:hello@imaginaryspace.ai" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              hello@imaginaryspace.ai
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Phone</p>
            <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Location</p>
            <p className="text-gray-300 text-sm">
              San Francisco, CA
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-slate-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © 2025 Imaginary Space. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}