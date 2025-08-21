import React from 'react'

export const Education = () => {
  return (
  <section id="education" className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">ประวัติการศึกษา</h2>
      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
        <div className="text-left mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            จบ ปวช.3 สาขาเทคโนโลยีสารสนเทศ 
          </h3>
          <p className="text-gray-600 mt-1">วิทยาลัยอาชีวศึกษานครปฐม | 2022 - 2024</p>
          <ul className="list-disc list-inside text-gray-500 mt-4">
            <li>เน้นการเรียนรู้ด้านการออกแบบ UI/UX, Branding และ Motion Graphic</li>
            <li>GPA: 3.48</li>
            <li>ทำโปรเจกต์จบการศึกษาเกี่ยวกับถังแยกขยะอัตโนมัติ</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
