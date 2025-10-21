import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import { Message } from '../../Context/MessageContext';
import axios from 'axios';


const Footer = () => {
const { toast } = useContext(Message);
  const apiUrl = import.meta.env.VITE_API_URL;
  
const handleNewsletterSubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  try {
    const res = await axios.post(`${apiUrl}/footer`, { email });
    toast.success(res.data.message);
  } catch (error) {
    error
  };
  e.target.reset();
  };

const quiekLinks =[
  { title:'Home', to:'#home' },
  { title:'About me', to:'#about' },
  { title:'Skills', to:'/#skills' },
  { title:'Projects', to:'/#projects' },
  { title:'Contact-me', to:'/#contact' },
]
const supports =[
  { title:'About me', to:'https://www.facebook.com/aeroshift.me/'},
  { title:'FAQ', to:'/#'},
  { title:'Privacy Policy', to:'/#'},
  { title:'Contact-me', to:'https://t.me/Hasank44'},
  { title:'24/7h Online', to:'https://wa.me/qr/SLX4WSXMZ2IEO1'},
]

 const startDate = new Date(2024, 1, 20);
const now = new Date();

let years = now.getFullYear() - startDate.getFullYear();
let months = now.getMonth() - startDate.getMonth();

if (months < 0) {
  years--;
  months += 12;
}

console.log(`Experience: ${years} years and ${months} months`);

  return (
    <div className='bg-gray-900 py-3'>
        <div className="max-w-7xl mx-auto mb-5 px-4 sm:px-6 lg:px-8 grid grid-cols-He1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div>
            <h2 className="text-gray-200 mb-3 text-lg">About Me</h2>
            <p className="text-gray-400 text-sm max-w-xs mx-auto sm:mx-0">
              I am Professional Web & Apk Developer. I have an {years} Years and {months} months Of experience.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-4 text-gray-400">
              <a href="https://www.facebook.com/mdhasan.sjb" aria-label="Visit our Facebook page">
                <FaFacebook className="cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://x.com/hasan46476127" aria-label="Visit our Twitter page">
                <FaTwitter className="cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://github.com/Hasank44" aria-label="Visit our Instagram page">
                <FaGithub className="cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/in/mdhasansjb/" aria-label="Visit our LinkedIn page">
                <FaLinkedin className="cursor-pointer hover:text-blue-600" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-gray-200 mb-3 text-lg">Quick Links</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              {
                quiekLinks.map( link =>(
                  <li key={link.title}>
                    <a
                      href={link.to}
                    >{link.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h2 className="text-gray-200 mb-3 text-lg">Support</h2>
            <ul className="text-gray-400 text-sm space-y-2">
              {
                supports.map( support =>(
                  <li key={support.title}>
                    <Link
                      to={support.to}
                    >{support.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h2 className="text-gray-200 mb-3 text-lg">Newsletter</h2>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to my newsletter for updates and stay with me.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <label htmlFor="email-bottom" className="sr-only">
                Email address for newsletter
              </label>
              <input
                id="email-bottom"
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="px-2 py-1.5 rounded-md text-gray-300 bg-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full max-w-xs mx-auto sm:mx-0"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="px-2 py-1.5 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-700 pt-2" />
        <div className="text-center text-gray-300 text-sm py-1 font-sans">
          &copy; {new Date().getFullYear()} Hasan. All rights reserved.
        </div>
      </div>
  )
}

export default Footer;