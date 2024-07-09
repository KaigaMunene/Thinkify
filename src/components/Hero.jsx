import { Link } from 'react-router-dom';
import hero from '../assets/images/hero.png';
import SearchBar from './SearchBar';

function Home() {
  return (
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
