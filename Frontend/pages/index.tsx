import { motion } from 'framer-motion';
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
        <div tw="px-1">
          <p tw="text-7xl mt-7" className="style-script-regular">
            ¡Nos casamos!
          </p>
          <p tw="text-xl mt-3" className="solitreo-regular">
            ¡Y queremos compartir un día tan especial con todos vosotros!
          </p>
          <div tw="my-2">
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
