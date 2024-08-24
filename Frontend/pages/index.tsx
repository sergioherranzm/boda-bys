const Home = () => {
  return (
    <>
      <div tw="text-4xl flex flex-col items-center font-bold gap-5 text-primary-400 text-center">
        <img tw="mt-8" src="/portada.png" alt="portada" />
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
    </>
  );
};

export default Home;
