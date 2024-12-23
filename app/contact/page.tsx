import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram , FaRegEnvelope 
, FaMapMarkerAlt ,FaPhone
  } from 'react-icons/fa';

const page = () => {
  return (
    <>
    <section className="bg-gray-50 py-16 px-8 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
     
        <div className="text-center lg:text-left">
          <p
            className="text-md text-gray-700 uppercase font-semibold mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contact Us
          </p>
          <h1
            className="text-6xl font-bold text-gray-800 mb-6 leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get in touch <br />
            <span className="text-sky-500">Today!</span>
          </h1>
          <p
            className="text-lg text-gray-500 font-bold mb-8 tracking-wide leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We know how large objects will act, but <br />
            things on a small scale.
          </p>
          <div className="mb-6">
            <p className="text-gray-800 font-bold">
              Phone : <span>+451 215 215</span>
            </p>
            <p className="text-gray-800 font-bold mt-2">
              Fax : <span>+451 215 215</span>
            </p>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <FaFacebook className="text-gray-600 w-6 h-6 hover:text-blue-500 transition duration-300 cursor-pointer" />
            <FaTwitter className="text-gray-600 w-6 h-6 hover:text-sky-400 transition duration-300 cursor-pointer" />
            <FaInstagram className="text-gray-600 w-6 h-6 hover:text-pink-500 transition duration-300 cursor-pointer" />
            <FaLinkedin className="text-gray-600 w-6 h-6 hover:text-blue-700 transition duration-300 cursor-pointer" />
          </div>
        </div>

    
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dsfm7zxhg/image/upload/v1734981397/none_1_n5vu63.png"
              alt="Contact Us"
              className="w-full max-w-8xl lg:max-w-8xl h-auto rounded-lg object-cover relative z-10 hover:scale-105 hover:shadow-lg transition duration-300"
            />
            
          </div>
        </div>
      </div>
    </section>
    <div className="bg-white py-20 px-8">
    {/* Header Section */}
    <h2 className="text-center text-gray-700 font-semibold mb-2 tracking-wide">
      VISIT OUR OFFICE
    </h2>
    <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
      We help small businesses
      <br />
      with big ideas
    </h1>

    <div className="flex flex-col md:flex-row justify-center gap-10 relative h-[400px]">
  {/* Phone Section */}
  <label className="relative text-center flex flex-col items-center justify-center border p-8 cursor-pointer shadow-2xl transition-all transform bg-white text-gray-900 hover:scale-105 hover:shadow-xl peer-checked:bg-gray-800 peer-checked:text-white peer-checked:scale-105 focused:bg-gray-800 hover:bg-slate-600 hover:text-white">
    <input type="radio" name="selection" className="hidden peer" />
    <div className="flex flex-col items-center -mt-6">
      <FaPhone className="text-sky-500 text-5xl mb-4" />
      <p className="text-sm">georgia.young@example.com</p>
      <p className="text-sm mb-6">georgia.young@ple.com</p>
      <p className="font-medium mb-4">Get Support</p>
      <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
        Submit Request
      </button>
    </div>
  </label>

  {/* Location Section */}
  <label className="relative text-center flex flex-col items-center justify-center border p-8 cursor-pointer shadow-2xl transition-all transform bg-white text-gray-900 hover:scale-105 hover:shadow-xl peer-checked:bg-gray-800 peer-checked:text-white peer-checked:scale-105  hover:bg-slate-600 hover:text-white">
    <input type="radio" name="selection" className="hidden peer" />
    <div className="flex flex-col items-center -mt-6">
      <FaRegEnvelope

 className="text-sky-500 text-6xl mb-4" />
      <p className="text-sm">georgia.young@example.com</p>
      <p className="text-sm mb-6">georgia.young@ple.com</p>
      <p className="font-medium mb-4">Get Support</p>
      <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
        Submit Request
      </button>
    </div>
  </label>

  {/* Email Section */}
  <label className="relative text-center flex flex-col items-center justify-center border p-8 cursor-pointer shadow-2xl transition-all transform bg-white text-gray-900 hover:scale-105 hover:shadow-xl peer-checked:bg-gray-800 peer-checked:text-white peer-checked:scale-105  hover:bg-slate-600 hover:text-white">
    <input type="radio" name="selection" className="hidden peer" />
    <div className="flex flex-col items-center -mt-6">
      <FaRegEnvelope


 className="text-sky-500 text-5xl mb-4" />
      <p className="text-sm">georgia.young@example.com</p>
      <p className="text-sm mb-6">georgia.young@ple.com</p>
      <p className="font-medium mb-4">Get Support</p>
      <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
        Submit Request
      </button>
    </div>
  </label>
</div>

  {/* footer */}

    <div className="text-center mt-8">
      <p className="text-gray-500 text-sm mb-4 tracking-wide">WE CAN'T WAIT TO MEET YOU</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Talk</h2>
      <button className="border border-sky-500 text-sky-500 py-3 px-10 text-lg  bg-transparent hover:bg-sky-500 hover:text-white transition">
        Try it free now
      </button>
    </div>
  </div>
  </>
  )
}

export default page