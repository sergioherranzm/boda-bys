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
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <div
          tw="flex flex-col items-center justify-center container mx-auto py-2 px-1 gap-y-1"
          className="solitreo-regular"
        >
          <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
              onClick={() => setIsOpen7((prev) => !prev)}
            >
              <motion.div>
                {!isOpen7 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">¿Hay Pre-boda?</p>
            </div>

            {!isOpen7 ? (
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
                <p tw="">¡¡SÍ!!</p>
                <p>
                  Nos gustaría mucho juntarnos todos y vernos el viernes 29 por
                  la tarde para ir calentando motores antes del fiestón jeje.
                  Pero todavía no podemos asegurarlo al 100% ni sabemos el
                  lugar.
                </p>
                <p>
                  Actualizaremos la sección de &#127881;{' '}
                  <a
                    tw="underline cursor-pointer font-semibold"
                    href="/preboda"
                  >
                    La Previa
                  </a>{' '}
                  &#127881; cuando tengamos más noticias. &#128540;
                </p>
                {/*<a tw="underline cursor-pointer" href="/preboda">
                  Ver información de "La Previa"
                  </a>*/}
              </motion.div>
            )}
          </div>
          {/*SEPARACION DE ITEM*/}
          {/*<div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
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
              </div>*/}
          {/*<div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
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
              </div>*/}
          {/*SEPARACION DE ITEM*/}
          <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
              onClick={() => setIsOpen5((prev) => !prev)}
            >
              <motion.div>
                {!isOpen5 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">¿Dónde puedo aparcar?</p>
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
                  <a
                    tw="underline cursor-pointer font-semibold"
                    href="/boda#transporte"
                  >
                    La Boda
                  </a>{' '}
                  puedes encontrar las distintas opciones de transporte y
                  aparcamiento.
                </p>
              </motion.div>
            )}
          </div>
          {/*SEPARACION DE ITEM*/}
          <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
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
          {/*SEPARACION DE ITEM*/}
          <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
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
                  No os preocupéis, se proporcionará munición adecuada para
                  acribillar a los novios convenientemente.
                </p>
              </motion.div>
            )}
          </div>
          {/*SEPARACION DE ITEM*/}
          <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
              onClick={() => setIsOpen8((prev) => !prev)}
            >
              <motion.div>
                {!isOpen8 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">¿Pueden ir niños a la boda?</p>
            </div>

            {!isOpen8 ? (
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
                <p>¡Por supuesto! Nuestra boda es &quot;kids-friendy&quot;.</p>
              </motion.div>
            )}
          </div>
          {/*SEPARACION DE ITEM*/}
          <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
              onClick={() => setIsOpen9((prev) => !prev)}
            >
              <motion.div>
                {!isOpen9 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
              </motion.div>
              <p tw="text-xl font-bold">¿Sobre qué hora terminará la boda?</p>
            </div>

            {!isOpen9 ? (
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
                  Es una boda de mañana. La boda comenzará a las 13h (se ruega
                  puntualidad) y se espera que termine NO más tarde de las 23h
                  (variará según el tiempo de la celebración y la comida).
                </p>
              </motion.div>
            )}
          </div>
          {/*SEPARACION DE ITEM*/}
          <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
            <div
              tw="px-2 pt-1 flex gap-1"
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
                    <a
                      tw="text-green-600"
                      href="https://wa.me/618111034"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon fontSize="large"></WhatsAppIcon>
                    </a>
                  </li>
                  <li>
                    &nbsp; Bea:{' '}
                    <a tw="text-blue-600" href="tel:+34675634437">
                      <PhoneIcon fontSize="large"></PhoneIcon>
                    </a>{' '}
                    <a
                      tw="text-green-600"
                      href="https://wa.me/675634437"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon fontSize="large"></WhatsAppIcon>
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
          {/*SEPARACION DE ITEM*/}
        </div>
        <div tw="" id="fotoFAQ"></div>
      </AnimatePresence>
    </>
  );
};

export default Home;
