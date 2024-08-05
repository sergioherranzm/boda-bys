import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center justify-center hidden">
        <div tw="my-8 flex flex-col items-center">
          <h1 tw="my-2 text-7xl font-extrabold text-primary-400 ">BODA</h1>
        </div>
        <div tw="text-4xl flex items-center font-bold text-primary-400">
          <Link href="#">
            <a tw="text-xl mr-2 underline cursor-pointer hover:text-secondary-400">
              Sign in
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
