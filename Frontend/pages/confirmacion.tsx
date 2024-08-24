import { FORM_URL } from '../lib/config';

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
          <iframe src={FORM_URL} width="600" height="1224">
            Cargando…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
