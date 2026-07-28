import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full mt-auto bg-white border-t border-slate-200/80 py-5 text-slate-600 text-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3">
          <Link to="/" className="inline-flex items-center">
            <Logo width="70px" />
          </Link>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <p className="text-xs sm:text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Blog Hive. All rights reserved.
          </p>
        </div>

        {/* Center: Minimal Links */}
        <nav className="flex items-center gap-6 text-xs sm:text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/all-posts" className="hover:text-blue-600 transition-colors">
            All Posts
          </Link>
          <Link to="/add-post" className="hover:text-blue-600 transition-colors">
            Add Post
          </Link>
          <a href="#privacy" className="hover:text-blue-600 transition-colors">
            Privacy
          </a>
          <a href="#terms" className="hover:text-blue-600 transition-colors">
            Terms
          </a>
        </nav>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
          title="Back to top"
        >
          <span>Top</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default Footer
