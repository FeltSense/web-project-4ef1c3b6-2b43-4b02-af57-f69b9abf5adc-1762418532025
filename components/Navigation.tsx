'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-transparent border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-lg"></div>
              <div className="relative inset-0 bg-slate-950 rounded-lg flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-sm">IS</span>
              </div>
            </div>
            <span className="hidden sm:block text-lg font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Imaginary Space
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            
            <a 
              href="#about" 
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              About
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            
            <a 
              href="#services" 
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2.5 text-sm font-semibold text-white overflow-hidden rounded-lg group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity blur-lg"></div>
              <span className="relative">Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <Link 
              href="/" 
              className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <a 
              href="#about" 
              className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            
            <a 
              href="#services" 
              className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            
            <button className="w-full mt-4 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}