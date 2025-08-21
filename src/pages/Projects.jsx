import React from 'react'

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <h2 className="text-4xl font-extrabold text-teal-700 mb-12 tracking-wide drop-shadow">
        โปรเจกต์ที่ทำ
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            img: "https://cdn.discordapp.com/attachments/1352592522681258006/1408116423250935829/5.png?ex=68a8921c&is=68a7409c&hm=069a3c9607ab5b2cd8a98532e44229abcf0f7545ed1cc491d3db5cea3d744658&",
            title: "Portfolio Website",
            desc: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว",
          },
        ].map(({ img, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center"
          >
            <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-6 shadow" />
            <h3 className="text-2xl font-bold text-teal-700 mb-2">{title}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">{desc}</p>
            <a
              href="#home"
              className="mt-auto inline-block text-teal-600 hover:text-teal-400 font-semibold transition-colors underline underline-offset-4"
            >
              ดูรายละเอียด &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}