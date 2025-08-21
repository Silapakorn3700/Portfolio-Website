import React from 'react'

export const About = ({ imageUrl }) => {
  // หากไม่ได้ส่ง imageUrl จะใช้รูป default
  const defaultImage = "https://cdn.discordapp.com/attachments/1352592522681258006/1408116337556983940/4.png?ex=68a89208&is=68a74088&hm=d851509935866267338d3713c75f208cf56bad4aa61006cde6d7196d431d1709&";
  const imgSrc = imageUrl || defaultImage;

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-10 tracking-wide drop-shadow">
          เกี่ยวกับฉัน
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p className="text-left md:text-lg text-gray-700 font-medium">
            ผมเริ่มต้นเรียนรู้การพัฒนาเว็บไซต์ตั้งแต่พื้นฐาน และรู้สึกชอบการออกแบบที่ช่วยให้ผู้ใช้ใช้งานง่ายและเข้าใจได้รวดเร็ว 
            ด้วยเหตุนี้เองผมจึงเริ่มศึกษาเรื่อง UX/UI Design ควบคู่กับการเขียนโค้ด โดยเฉพาะการพัฒนา Front-End ด้วย React.js
          </p>
          <div className="w-full flex items-center justify-center">
            <img
              src={imgSrc}
              alt="about"
              className="w-64 h-64 object-cover rounded-xl shadow-xl border-4 border-teal-200"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
