const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center justify-center">
        <div tw="text-4xl flex flex-col items-center font-bold gap-5 text-primary-400">
          <h1 tw="my-2 text-7xl font-extrabold text-primary-400 ">
            LOGO o FOTO
          </h1>
          <p tw="text-xl">
            ¡NOS CASAMOS! ¡Y queremos que nos acompañes es ese día!
          </p>
          <a
            href="/confirmacion"
            tw="text-xl mr-2 hover:underline cursor-pointer hover:text-secondary-400 bg-gray-400"
          >
            CONFIRMA AQUÍ TU ASISTENCIA
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
