import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('ข้อความถูกส่งแล้ว');
    event.target.reset();
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">ติดต่อ</h2>
        <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="ชื่อของคุณ"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="ข้อความของคุณ"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-600 text-white font-bold rounded-full shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105"
            >
              ส่งข้อความ
            </button>
            <div className="mt-4 text-sm text-center text-teal-600">{message}</div>
          </form>

          <div className="mt-8 space-y-4">
            <p className="text-gray-600">หรือติดต่อผ่านช่องทางอื่นๆ:</p>
            <div className="flex justify-center space-x-6">
              <a
                href="silapakorn:miminion22@gmail.com"
                className="text-gray-800 hover:text-teal-600 transition-colors text-lg font-semibold"
              >
                Email
              </a>
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-teal-600 transition-colors text-lg font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
