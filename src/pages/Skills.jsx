import React from 'react'

export const Skills = () => {
  const skills = [
    { name: "UI/UX Design", icon: "🎨" },
    { name: "Figma", icon: "🖌️" },
    { name: "Adobe Illustrator", icon: "✏️" },
    { name: "React.js", icon: "⚛️" },
    { name: "HTML/CSS", icon: "🌐" },
  ]

  return (
  <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-teal-700 mb-10 tracking-wide drop-shadow">
        ทักษะของฉัน
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
          >
            <span className="text-4xl mb-3">{skill.icon}</span>
            <span className="text-lg font-semibold text-teal-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
