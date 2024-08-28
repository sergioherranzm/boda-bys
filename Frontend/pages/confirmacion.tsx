import { FORM_URL } from '../lib/config';

const Home = () => {
  return (
    <>
      <div tw="mt-4 mx-auto ">
        <div tw="px-4 text-primary-400 mx-auto max-w-max">
          <p tw="font-bold">
            Por favor, confirma tu asistencia a través del siguiente formulario:
          </p>
          <p tw="text-xs mt-2">
            Podrás rellenar el formulario una sola vez para ti y tus
            acompañantes (o familia).
          </p>
        </div>
        <div tw="">
          <iframe src={FORM_URL} width="100%" height="1224">
            Cargando…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
