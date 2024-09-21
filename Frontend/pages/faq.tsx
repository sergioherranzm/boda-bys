import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
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
        <div tw="container my-1 p-1 grid grid-cols-1 gap-y-1">
          <div tw="border border-primary-100 shadow-2xl py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
            <div
              tw="px-2 flex gap-1"
              onClick={() => setIsOpen1((prev) => !prev)}
            >
              <motion.div>
                {!isOpen1 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">
                ¿Como podemos contactar con vosotros?
              </p>
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
                tw="ml-10 mt-2"
              >
                <p>Aquí tienes nuestros contactos:</p>
                <ul>
                  <li>
                    &nbsp; Sergio:{' '}
                    <a tw="text-blue-600" href="tel:+34618111034">
                      <PhoneIcon fontSize="large"></PhoneIcon>
                    </a>{' '}
                    <a tw="text-green-600" href="https://wa.me/618111034">
                      <WhatsAppIcon fontSize="large"></WhatsAppIcon>
                    </a>
                  </li>
                  <li>
                    &nbsp; Bea:{' '}
                    <a tw="text-blue-600" href="tel:+34675634437">
                      <PhoneIcon fontSize="large"></PhoneIcon>
                    </a>{' '}
                    <a tw="text-green-600" href="https://wa.me/675634437">
                      <WhatsAppIcon fontSize="large"></WhatsAppIcon>
                    </a>
                  </li>
                </ul>
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
              <p tw="text-xl font-bold">¿Habrá servicio de autobuses?</p>
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
                tw="ml-10 mt-2"
              >
                <p>
                  No está definido todavía. Actualizaremos esta sección cuando
                  tengamos más noticias.
                </p>
              </motion.div>
            )}
          </div>
          <div tw="border border-primary-100 shadow-2xl py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
            <div
              tw="px-2 flex gap-1"
              onClick={() => setIsOpen3((prev) => !prev)}
            >
              <motion.div>
                {!isOpen3 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">
                ¿Habrá alpargatas para cambiarse los tacones?
              </p>
            </div>

            {!isOpen3 ? (
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
                tw="ml-10 mt-2"
              >
                <p>
                  No está definido todavía. Actualizaremos esta sección cuando
                  tengamos más noticias.
                </p>
              </motion.div>
            )}
          </div>
          <div tw="border border-primary-100 shadow-2xl py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
            <div
              tw="px-2 flex gap-1"
              onClick={() => setIsOpen4((prev) => !prev)}
            >
              <motion.div>
                {!isOpen4 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">
                ¿Se puede lanzar arroz o confeti a los novios?
              </p>
            </div>

            {!isOpen4 ? (
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
                tw="ml-10 mt-2"
              >
                <p>
                  La finca sanciona expresamente el uso de arroz o confeti, por
                  lo que os pedimos que os abstengais de tirarlos.
                </p>
                <p>
                  No os preocupes, se proporcionará munición adecuada para
                  acribillar a los novios convenientemente.
                </p>
              </motion.div>
            )}
          </div>
          <div tw="border border-primary-100 shadow-2xl py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
            <div
              tw="px-2 flex gap-1"
              onClick={() => setIsOpen5((prev) => !prev)}
            >
              <motion.div>
                {!isOpen5 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">¿Dónde aparcar?</p>
            </div>

            {!isOpen5 ? (
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
                tw="ml-10 mt-2"
              >
                <p>
                  En la sección de{' '}
                  <a tw="underline" href="/logistica">
                    recomendaciones
                  </a>{' '}
                  puedes encontrar las ditintas opciones de transporte y
                  aparcamiento.
                </p>
              </motion.div>
            )}
          </div>
          <div tw="border border-primary-100 shadow-2xl py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
            <div
              tw="px-2 flex gap-1"
              onClick={() => setIsOpen6((prev) => !prev)}
            >
              <motion.div>
                {!isOpen6 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">
                ¿La boda es en el interior o al aire libre?
              </p>
            </div>

            {!isOpen6 ? (
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
                tw="ml-10 mt-2"
              >
                <p>
                  ¡Las dos cosas! La ceremonia y el cocktail se celebrarán al
                  aire libre, la comida en el interior de los salones, y para la
                  fiesta estaremos en el jardín con carpa.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Home;
