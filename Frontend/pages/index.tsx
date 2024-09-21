import { Timer } from '../components/Timer';

const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center text-primary-400 text-center">
        <div
          tw="flex flex-col items-center justify-center"
          className="lobster-regular"
          id="fotoPortada"
        >
          <p tw="text-7xl font-bold text-white">BEA</p>
          <p tw="text-5xl font-bold text-white">&amp;</p>
          <p tw="text-7xl font-bold text-white">SERGIO</p>
        </div>
        {/*<img tw="max-w-xl" src="/test2.png" alt="portada" />*/}
        <p tw="text-xl text-red-600 font-bold mt-2">
          Esta web esta todavía en desarrollo
        </p>
        <p tw="text-xl font-bold mt-2">¡NOS CASAMOS!</p>
        <p tw="text-xl font-bold mt-2">
          ¡Y queremos compartir un día tan especial con todos vosotros!
        </p>
        <p tw="text-xl font-bold mt-2">
          La ceremonia civil será el 30.08.2025 en la finca el Molino de la
          Venta a las 13:00, y la posterior celebración en el mismo lugar.
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
