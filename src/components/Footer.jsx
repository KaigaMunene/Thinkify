import { Link } from 'react-router-dom';
import logo from '../assets/images/footer.png';

function Footer() {
  return (
    <div>
      <footer className="p-4 sm:pt-6 bg-dark_purple h-fit w-full text-gray-400 dark:text-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between p-8">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <Link to="/" className="flex items-center justify-center">
              <img src={logo} className="h-24 p-2" alt="Thinkify Logo" />
            </Link>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <ul>
              <li className="mb-2"> About Us </li>
              <li className="mb-2"> Team </li>
              <li className="mb-2"> Contact </li>
              <li className="mb-2"> Teens </li>
              <li className="mb-2"> Testimonies </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <ul className="">
              <li className="mb-2">Resources</li>
              <li className="mb-2"> FAQ </li>
              <li className="mb-2"> Blog </li>
              <li className="mb-2"> Audios </li>
              <li className="mb-2"> Videos </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <ul className="">
              <li className="mb-2">A Little Extra</li>
              <li className="mb-2"> Login </li>
              <li className="mb-2"> A little</li>
              <li className="mb-2"> Books </li>
              <li className="mb-2"> Facilitators </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
