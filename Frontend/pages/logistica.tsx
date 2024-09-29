import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <div tw="flex flex-col items-center justify-center">
          <p tw="text-xl font-bold">Alojamiento</p>
          <div tw="container my-1 p-1 grid grid-cols-1 gap-y-1">
            <div tw="border border-primary-100 shadow-2xl py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
              <div
                tw="px-2 flex gap-1"
                onClick={() => setIsOpen1((prev) => !prev)}
              >
                <motion.div>
                  {!isOpen1 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                </motion.div>
                <p tw="text-xl font-bold">Venta Magullo</p>
              </div>

              {!isOpen1 ? (
                <div></div>
              ) : (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 0.15,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  className="font-light"
                  tw="mt-2 px-2"
                >
                  <p>
                    Se trata del propio hotel de la finca. Tiene habitaciones
                    sencillas de 2 estrellas.
                  </p>
                  <p>
                    El precio especial para los invitados es de 68€/noche con
                    desayuno.
                  </p>
                  <p>
                    Nota: Cuando reserveis, acordaos de informar que vais a
                    nuestra boda para que os apliquen el precio especial.
                  </p>
                  <p>Tabla de distancias: TBC</p>
                </motion.div>
              )}
            </div>
            <div tw="border border-primary-100 shadow-2xl py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
              <div
                tw="px-2 flex gap-1"
                onClick={() => setIsOpen2((prev) => !prev)}
              >
                <motion.div>
                  {!isOpen2 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                </motion.div>
                <p tw="text-xl font-bold">Hotel Puerta del Sur</p>
              </div>

              {!isOpen2 ? (
                <div></div>
              ) : (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 0.15,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  className="font-light"
                  tw="mt-2 px-2"
                >
                  <p>
                    Hotel de 4 estrellas cerca de la finca (400m - 5min andando)
                  </p>
                  <p>Precio aprox. 100€/noche.</p>
                  <p>Tabla de distancias: TBC</p>
                </motion.div>
              )}
            </div>
            <p tw="text-lg">En desarrollo</p>
          </div>
          <div tw="flex flex-col items-center gap-5 text-primary-400">
            <p tw="text-xl font-bold">Transporte</p>
            <p tw="text-lg">En desarrollo</p>
            <p tw="text-lg">Taxi</p>
            <p tw="text-lg">Bus</p>
            <p tw="text-lg">Aparcamientos</p>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Home;
