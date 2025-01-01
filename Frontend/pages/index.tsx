import { motion } from 'framer-motion';
import { Timer } from '../components/Timer';

const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center text-primary-400 text-center">
        <div
          tw="flex flex-col items-center justify-center"
          className="solitreo-regular"
          id="fotoPortada"
        >
          <p tw="text-7xl font-bold text-white">BEA</p>
          <p tw="text-5xl font-bold text-white">&amp;</p>
          <p tw="text-7xl font-bold text-white">SERGIO</p>
        </div>
        <div tw="px-1">
          <div
            tw="px-1 text-xl flex flex-col justify-center max-w-5xl mx-auto"
            className="solitreo-regular"
          >
            <p tw="mt-6">
              Hace más de 5 años que el azar nos unió (por suerte) y comenzó
              nuestra historia. Una historia llena de momentos felices, risas,
              viajes, confidencias, cenas, charlas, juegos de mesa, pelis... y
              también alguna que otra lágrima, ¡todo hay que decirlo!
            </p>
            <p tw="mt-5">
              Con una pandemia de por medio que nos separó a la fuerza, en la
              que nos echamos tremendamente de menos, pero que reforzó nuestra
              certeza de que estábamos hechos el uno para el otro. Más adelante
              empezó la convivencia, en la que hemos seguido construyendo los
              pilares de nuestro amor, y ahora no nos imaginamos la vida sin el
              uno sin el otro. Así que, después de estos maravillosos años,
              hemos decidido dar un paso más:
            </p>
            <p tw="text-6xl mt-3" className="style-script-regular">
              ¡Nos casamos!
            </p>
            <p tw="mt-3">
              ¡Y queremos compartir un día tan especial con todos vosotros!
            </p>
            <p tw="mt-3">
              Así que ponte tus mejores galas, y preparate para darlo todo en
              Segovia city. Nos hace mucha ilusión veros a todos allí.
            </p>
          </div>
          <div tw="my-2 flex justify-center">
            <img src="/separator.svg" alt="" />
          </div>
          <div className="barlow-semi-condensed-regular">
            <motion.div
              tw="text-xl font-bold px-2 rounded mb-4 cursor-pointer hover:bg-secondary-100 bg-bg-400"
              whileHover={{
                scaleX: 1.04,
                scaleY: 1.18,
                transition: { duration: 0.3 },
              }}
            >
              <a href="/confirmacion">CONFIRMA AQUÍ TU ASISTENCIA</a>
            </motion.div>
            <motion.div
              tw="text-xl font-bold px-2 rounded mb-4 cursor-pointer hover:bg-secondary-100 bg-bg-400"
              whileHover={{
                scaleX: 1.04,
                scaleY: 1.18,
                transition: { duration: 0.3 },
              }}
            >
              <a href="http://www.google.com/calendar/render?action=TEMPLATE&text=Boda+Bea+y+Sergio&dates=20250830T090000Z/20250830T210000Z&location=Finca%20el%20Molino%20de%20la%20Venta%2C%20La%20Lastrilla%2C%20Segovia&details=Visita%20nuestra%20web%3A%0A%3Ca%20href%3D%22https%3A%2F%2Fbodasergioybea.zegio.top%2F%22%3Ehttps%3A%2F%2Fbodasergioybea.zegio.top%2F%3C%2Fa%3E">
                AÑADE EL EVENTO A TU CALENDARIO
              </a>
            </motion.div>
            {/*<motion.div
              tw="text-xl font-bold px-2 rounded mb-4 cursor-pointer hover:bg-secondary-100 bg-bg-400"
              whileHover={{
                scaleX: 1.04,
                scaleY: 1.18,
                transition: { duration: 0.3 },
              }}
            >
              <a href="/preboda">LA PRE-BODA</a>
            </motion.div>*/}
            {/*<motion.div
            tw="text-xl font-bold px-2 rounded mb-4 cursor-pointer hover:bg-secondary-100 bg-bg-400"
            whileHover={{
              scaleX: 1.08,
              scaleY: 1.08,
              transition: { duration: 0.3 },
            }}
          >
            <a href="/fotos">SUBE AQUÍ TUS FOTOS</a>
          </motion.div>*/}
          </div>
        </div>
      </div>
      <div tw="mt-5 border-b border-white ">
        <Timer></Timer>
      </div>
    </>
  );
};

export default Home;
