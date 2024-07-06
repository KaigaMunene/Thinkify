import { Link } from 'react-router-dom';
import logo from '../assets/images/thinkify-logo.png';

function Footer() {
  return (
    <div>
      <footer className="p-4 sm:pt-6 bg-pink-600 h-fit w-full text-gray-400 dark:text-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-8 mr-3" alt="Thinkify Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap hover:underline text-tea_green hover:text-white">
                Thinkify
              </span>
            </Link>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="mb-2 text-base md:text-xl font-semibold uppercase text-tea_green">
              About Us
            </h2>
            <ul className="text-sm pl-2">
              <li className="mb-2">
                <Link to="/" className="hover:underline hover:text-tea_green">
                  Team
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/About"
                  className="hover:underline hover:text-tea_green"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/Our-Team"
                  className="hover:underline hover:text-tea_green"
                >
                  Teens
                </Link>
              </li>
              <li>
                <Link
                  to="/Projects"
                  className="hover:underline hover:text-tea_green"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="mb-2 text-base md:text-xl font-bold text-tea_green uppercase">
              Resources
            </h2>
            <ul className="text-sm pl-2">
              <li className="mb-2"> FAQ </li>
              <li className="mb-2"> Blog </li>
              <li className="mb-2"> Audios </li>
              <li className="mb-2"> Videos </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="mb-2 text-base md:text-xl font-bold text-tea_green uppercase">
              A little Extra
            </h2>
            <ul className="text-sm pl-2">
              <li className="mb-2"> Login </li>
              <li className="mb-2"> A little</li>
              <li className="mb-2"> Books </li>
              <li className="mb-2"> Facilitators </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-around">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            1999 - 2023 Ivy Pixels. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
