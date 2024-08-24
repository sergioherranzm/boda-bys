const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center justify-center">
        <div tw="flex flex-col items-center font-bold gap-5 text-primary-400">
          <p tw="text-4xl">
            Por favor, confirma tu asistencia a través del siguiente formulario:
          </p>
          <p tw="">
            Podras rellenar el formulario una sola vez para ti y tus
            acompañantes (o familia).
          </p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdrzNreXMj7_Nh4kT5xe3KCsQ0SYTShE5sXVdB26mpaF8GeAA/viewform?embedded=true"
            width="600"
            height="1224"
          >
            Cargando…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
