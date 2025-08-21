import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-center md:text-left text-sm">
          &copy; 2568 ศิลปากร แก้วศรี. 
        </p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a
            href="https://github.com/Silapakorn3700"
            className="text-gray-400 hover:text-teal-400 transition-colors text-lg font-medium"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="mailto:miminion22@gmail.com"
            className="text-gray-400 hover:text-teal-400 transition-colors text-lg font-medium"
            aria-label="email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
