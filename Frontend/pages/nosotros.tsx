const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center justify-center">
        <div tw="my-8 flex flex-col items-center">
          <h1 tw="my-2 text-7xl font-extrabold text-primary-400 ">nosotros</h1>
        </div>
        <div tw="text-4xl flex flex-col items-center font-bold gap-5 text-primary-400">
          <p>Sergio Herranz Montoya</p>

          <a
            href="https://github.com/sergioherranzm/parkisi"
            tw="text-xl mr-2 hover:underline cursor-pointer hover:text-secondary-400"
          >
            https://github.com/sergioherranzm/parkisi
          </a>

          <p tw="text-xl">sergioherranzm@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Home;
