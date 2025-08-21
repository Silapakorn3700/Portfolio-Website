import React from 'react'

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-teal-100 via-white to-teal-200"
    >
      <div className="text-center">
        <img 
          src="https://cdn.discordapp.com/attachments/1352592522681258006/1408116872972599477/6.png?ex=68a89288&is=68a74108&hm=1290732b35e516a6868bfc4f570c7e7bb1dfc53281f3f049f38cdaa93ef930af&" 
          alt="Profile Picture" 
          className="w-48 h-48 rounded-full mx-auto mb-6 border-8 border-teal-500 shadow-lg rotate-3 hover:rotate-0 transition-transform"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
          สวัสดีครับ ผม <span className="text-teal-600">Silapakorn KaewEiEi</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">
          นักศึกษาปวส.1 สาขาเทคโนโลยีสารสนเทศ
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-teal-600 text-white font-bold rounded-full shadow-md hover:bg-teal-700 transition-transform hover:scale-105"
        >
          View My Projects
        </a>
      </div>
    </section>
  )
}
