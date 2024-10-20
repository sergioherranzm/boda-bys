import { FORM_URL } from '../lib/config';

const Home = () => {
  return (
    <>
      <div tw="mt-4 mx-auto ">
        <div
          tw="px-4 text-primary-400 mx-auto max-w-max"
          className="solitreo-regular"
        >
          <p tw="font-bold text-center">CONFIRMACIÓN DE ASISTENCIA</p>
          <p tw="mt-2 text-center">
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
