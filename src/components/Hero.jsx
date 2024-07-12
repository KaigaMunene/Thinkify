import { Link } from 'react-router-dom';
import hero from '../assets/images/hero.png';
import SearchBar from './SearchBar';

function Home() {
  return (
    <section
      id="about"
      className="flex flex-col h-fit lg:h-screen w-full bg-gradient-to-r from-light_purple to-light_red justify-center items-center pt-16" // Added pt-16 to account for fixed navbar
    >
      <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl p-4 lg:p-8">
        <div className="order-2 lg:order-1 flex justify-center w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
          <div className="w-full text-dark_blue text-justify">
            <p className="text-4xl mb-4">
              <span className="text-dark_purple">...innovative tools</span>
              <br />
              for today’s learners.
            </p>
            <p className="mb-4">
              Cutting-Edge Resources Designed to inspire
              <br />
              And Empower Your Educational Journey
            </p>
            <button
              type="button"
              className="bg-dark_green p-2 rounded-lg self-start hover:bg-dark_purple focus:outline-none shadow-md"
            >
              <Link to="/shop" className="text-white">
                Shop Now
              </Link>
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={hero}
            className="rounded w-64 md:w-80 lg:w-96"
            alt="Table Setting"
          />{' '}
          {/* Added responsive width classes */}
        </div>
      </div>
      <div className="w-full max-w-6xl">
    <section id="about" className="h-fit lg:h-screen w-full bg-white">
      <div className="py-4 px-4">
        <div className="flex flex-col justify-center pt-8 md:flex-col lg:flex-row">
          <div className="text w-full text-justify text-dark_blue m-4">
            <p className="text-4xl">
              <span className="text-red-600">...innovative tools</span> <br />
              for today&rsquo;s learners.
            </p>
            <p>
              Cutting-Edge Resources Designed to inspire <br />
              And Empower Your Educational Journey
            </p>
            <div>
              <button type="button" className="bg-dark_green p-2 rounded-lg">
                <Link to="/shop" className="text-white">
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
          <div className="m-4 w-full">
            <img src={hero} className="rounded w-96" alt="Table Setting" />
          </div>
        </div>
        <SearchBar />
      </div>
    </section>
  );
}

export default Home;
