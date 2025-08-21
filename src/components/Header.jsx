import React from 'react'

export const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-xs z-50 shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <a
        href="#home"
        className="text-2xl font-bold text-gray-800 hover:text-teal-600 transition-colors"
      >
        Silapakorn Portfolio
      </a>
      <div className="flex space-x-6">
        <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">
          หน้าแรก
        </a>
        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
          เกี่ยวกับฉัน
        </a>
        <a href="#education" className="text-gray-600 hover:text-gray-900 transition-colors">
          การศึกษา
        </a>
        <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
          ประสบการณ์
        </a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
          โปรเจกต์
        </a>
        <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
          ทักษะ
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
          ติดต่อ
        </a>
      </div>
    </div>
  </nav>
  )
}
