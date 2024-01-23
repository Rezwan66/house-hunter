import { AiOutlineSearch } from 'react-icons/ai';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <>
      <div className="h-40 bg-teal-200">
        <p className="text-xl text-center font-semibold my-10">
          <span className="text-slate-500">
            {' '}
            <Typewriter
              words={[
                'Find your perfect Home!',
                'Host your humble Abode!',
                'Explore your dream Houses!',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </p>
        <form className="p-4 flex items-center justify-center gap-2">
          <input
            name="searchTerm"
            type="text"
            placeholder="Search for a house"
            className="p-3 block max-w-60 h-10 shadow-lg outline-none border-2 rounded-md border-dashed  invalid:border-red-700 valid:border-[#0095ff]"
          />
          <button
            type="submit"
            className="p-2 h-10 overflow-hidden shadow-lg border-0 rounded-md border-dashed border-[#0095ff] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0095ff] before:hover:translate-x-0  before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0095ff] relative inline-block hover:text-white z-50 text-2xl font-bold"
          >
            <AiOutlineSearch />
          </button>
        </form>
      </div>
    </>
  );
};
export default Banner;
