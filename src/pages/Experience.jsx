import React from 'react'

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-100 to-teal-50">
      <div className="max-w-6xl mx-auto text-center w-full">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-12 tracking-wide drop-shadow">
          ประสบการณ์ทำงาน
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <div className="text-left mb-6">
            <h3 className="text-2xl font-bold text-teal-700 mb-1">นักศึกษาฝึกงาน</h3>
            <p className="text-gray-600 mb-4">
              บริษัท ไมโครคอม <span className="mx-2 text-teal-400">|</span> 2567 (4 เดือน)
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
              <li>
                <span className="font-medium text-teal-600">จัดการซ่อมแซมอุปกรณ์ IT:</span> แก้ไขปัญหาด้านฮาร์ดแวร์และซอฟต์แวร์ทุกชนิดภายในร้านทั้งหมด
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
