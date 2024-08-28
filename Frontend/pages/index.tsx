import { Timer } from '../components/Timer';

const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center text-primary-400 text-center">
        <img tw="mt-8" src="/portada.png" alt="portada" />
        <p tw="text-xl text-red-600 font-bold mt-2">
          Esta web esta todavía en desarrollo
        </p>
        <p tw="text-xl font-bold mt-2">
          ¡NOS CASAMOS! ¡Y queremos que nos acompañes!
        </p>
        <Timer></Timer>
        <p tw="text-lg font-bold mt-2">
          Si no lo has hecho todavía, confirma tu asistencia. Muchas gracias.
        </p>
        <a
          href="/confirmacion"
          tw="text-xl font-bold px-2 rounded my-4 hover:underline cursor-pointer hover:text-secondary-400 bg-secondary-100"
        >
          CONFIRMA AQUÍ TU ASISTENCIA
        </a>
      </div>
    </>
  );
};

export default Home;
