import { FORM_URL } from '../lib/config';

const Home = () => {
  return (
    <>
      <div tw="px-8 py-4 text-center">
        <div tw="font-bold text-primary-400">
          <p tw="text-4xl">
            Por favor, confirma tu asistencia a través del siguiente formulario:
          </p>
          <p tw="">
            Podras rellenar el formulario una sola vez para ti y tus
            acompañantes (o familia).
          </p>
        </div>
      </div>
      <div tw="w-screen">
        <iframe src={FORM_URL} width="100%" height="1224">
          Cargando…
        </iframe>
      </div>
    </>
  );
};

export default Home;
