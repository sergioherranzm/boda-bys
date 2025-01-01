import { motion } from 'framer-motion';
import { FORM_URL } from '../lib/config';

const Home = () => {
  return (
    <>
      <div tw="mt-4 mx-auto ">
        <div
          tw="px-4 text-primary-400 mx-auto max-w-max"
          className="solitreo-regular"
        >
          <p tw="font-bold text-center text-xl">CONFIRMACIÓN DE ASISTENCIA</p>
          <div
            tw="px-4 flex flex-col items-center text-primary-400 text-center"
            className="barlow-semi-condensed-regular"
          >
            <motion.div
              tw="text-base font-bold px-2 rounded mb-2 cursor-pointer hover:bg-secondary-100 bg-bg-400"
              whileHover={{
                scaleX: 1.04,
                scaleY: 1.18,
                transition: { duration: 0.3 },
              }}
            >
              <a href="http://www.google.com/calendar/render?action=TEMPLATE&text=Boda+Bea+y+Sergio&dates=20250830T084500Z/20250830T210000Z&location=Finca%20el%20Molino%20de%20la%20Venta%2C%20La%20Lastrilla%2C%20Segovia&details=Visita%20nuestra%20web%3A%0A%3Ca%20href%3D%22https%3A%2F%2Fbodasergioybea.zegio.top%2F%22%3Ehttps%3A%2F%2Fbodasergioybea.zegio.top%2F%3C%2Fa%3E">
                AÑADE EL EVENTO A TU CALENDARIO
              </a>
            </motion.div>
          </div>
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
