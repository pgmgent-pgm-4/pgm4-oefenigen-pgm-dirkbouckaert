import myImg from '../assets/images/me.webp';

function Home() {
  return (
    <section
      className="mx-auto -mt-8 flex h-full flex-col items-center justify-start
                 text-center sm:flex-row sm:justify-center sm:gap-8"
    >
      <div className="p-12 sm:min-w-80 sm:flex-[50%] sm:pl-24 sm:text-left">
        <h3>Full Stack Developer</h3>
        <h1 className="text-6xl">Hi, I'm Pete</h1>
        <button className="btn btn-secondary">More about me</button>
      </div>

      <div className="w-full pt-8 sm:flex-[50%]">
        <img
          src={myImg}
          alt="Picture of the developer"
          className="w-full object-cover object-center"
        />
      </div>
    </section>
  );
}

export default Home;
