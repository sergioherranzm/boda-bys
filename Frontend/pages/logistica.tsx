import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SignpostIcon from '@mui/icons-material/Signpost';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MapIcon from '@mui/icons-material/Map';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

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
        <div tw="grid grid-cols-1" className="solitreo-regular">
          <div tw="mt-5 flex flex-col items-center" id="alojamiento">
            <p tw="text-4xl font-bold">Alojamiento</p>
            <div tw="container my-1 p-1 grid grid-cols-1 gap-y-1">
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen1((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen1 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">
                    Venta Magullo &nbsp;
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
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
                    tw="mt-2 pl-3 pr-1"
                  >
                    <div tw="flex justify-between">
                      <div>
                        <SignpostIcon></SignpostIcon> 0 m /{' '}
                        <DirectionsWalkIcon></DirectionsWalkIcon> 0 min /{' '}
                        <DirectionsCarIcon></DirectionsCarIcon> 0 min{' '}
                      </div>
                      <div tw="px-2  hover:text-blue-800">
                        <a href="https://maps.app.goo.gl/mhdLD6V1Dyo7ehuE6">
                          <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                        </a>
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>
                        Se trata del propio hotel de la finca. Tiene
                        habitaciones sencillas.
                      </p>
                      <ul tw="pt-2" className="bulleted-inside">
                        El precio especial para los invitados es (todas con
                        desayuno incluido):
                        <li tw="">
                          Habitación Doble: <b>68 €</b>
                        </li>
                        <li tw="">
                          Habitación Doble con cama Supletoria (bajo
                          disponibilidad): <b>83 €</b>{' '}
                        </li>
                        <li tw="">
                          Habitación Doble de Uso Individual: <b>53 €</b>
                        </li>
                      </ul>
                      <p tw="pt-2">
                        Cuando reserveis,{' '}
                        <u>acordaos de informar que vais a nuestra boda</u> para
                        que os apliquen el precio especial.
                      </p>
                      <p tw="pt-2">
                        Las habitaciones con precios especiales solo estarán
                        disponibles <u>hasta el 29 de Junio</u>.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen2((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen2 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">
                    Hotel Puerta Segovia &nbsp;
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                  </p>
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
                    tw="mt-2 pl-3 pr-1"
                  >
                    <div tw="flex justify-between">
                      <div>
                        <SignpostIcon></SignpostIcon> 0,4 km /{' '}
                        <DirectionsWalkIcon></DirectionsWalkIcon> 5 min /{' '}
                        <DirectionsCarIcon></DirectionsCarIcon> -1 min{' '}
                      </div>
                      <div tw="px-2  hover:text-blue-800">
                        <a href="https://maps.app.goo.gl/VDUxW94uv1ExC99E6">
                          <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                        </a>
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>Hotel de 4 estrellas muy cerca de la finca.</p>
                      <p tw="pt-2">Precio aprox. 100€/noche.</p>
                      <p>TBC</p>
                      <p tw="pt-2">
                        Cuando reserveis,{' '}
                        <u>acordaos de informar que vais a nuestra boda</u> para
                        que os apliquen el precio especial.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen3((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen3 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">
                    Parador de Segovia &nbsp;
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
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
                    tw="mt-2 pl-3 pr-1"
                  >
                    <div tw="flex justify-between">
                      <div>
                        <SignpostIcon></SignpostIcon> 2,2 km /{' '}
                        <DirectionsWalkIcon></DirectionsWalkIcon> 30 min /{' '}
                        <DirectionsCarIcon></DirectionsCarIcon> 4 min{' '}
                      </div>
                      <div tw="px-2  hover:text-blue-800">
                        <a href="https://maps.app.goo.gl/6Vi9jZSXeqPbxg6d6">
                          <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                        </a>
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>
                        Se encuentra cerca de la finca pero no se recomienda ir
                        andando ya que hay que dar bastante vuelta.
                      </p>
                      <p tw="pt-2">Precio aprox. 106€/noche.</p>
                      <p>TBC</p>
                      <p tw="pt-2">
                        Cuando reserveis,{' '}
                        <u>acordaos de informar que vais a nuestra boda</u> para
                        que os apliquen el precio especial.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen4((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen4 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">
                    Palacio de La Floresta &nbsp;
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
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
                    tw="mt-2 pl-3 pr-1"
                  >
                    <div tw="flex justify-between">
                      <div>
                        <SignpostIcon></SignpostIcon> 2,5 km /{' '}
                        <DirectionsWalkIcon></DirectionsWalkIcon> 36 min /{' '}
                        <DirectionsCarIcon></DirectionsCarIcon> 7 min{' '}
                      </div>
                      <div tw="px-2  hover:text-blue-800">
                        <a href="https://maps.app.goo.gl/9eMEE5LemBG2Tm1x5">
                          <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                        </a>
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>Hotel cerca a 5 minutos del acueducto.</p>
                      <p tw="pt-2">Precio aprox. 999€/noche.</p>
                      <p>TBC</p>
                      <p tw="pt-2">
                        Cuando reserveis,{' '}
                        <u>acordaos de informar que vais a nuestra boda</u> para
                        que os apliquen el precio especial.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen5((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen5 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">
                    Hospedaje San Francisco &nbsp;
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                  </p>
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
                    tw="mt-2 pl-3 pr-1"
                  >
                    <div tw="flex justify-between">
                      <div>
                        <SignpostIcon></SignpostIcon> 2,4 km /{' '}
                        <DirectionsWalkIcon></DirectionsWalkIcon> 34 min /{' '}
                        <DirectionsCarIcon></DirectionsCarIcon> 6 min{' '}
                      </div>
                      <div tw="px-2  hover:text-blue-800">
                        <a href="https://maps.app.goo.gl/JB722YQSFVF7vLpBA">
                          <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                        </a>
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>Hospedaje modesto muy cerca del acueducto.</p>
                      <p tw="pt-2">Precio aprox. 999€/noche.</p>
                      <p>TBC</p>
                      <p tw="pt-2">
                        Cuando reserveis,{' '}
                        <u>acordaos de informar que vais a nuestra boda</u> para
                        que os apliquen el precio especial.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen6((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen6 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">
                    Hotel Eurostars Plaza Acueducto &nbsp;
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />{' '}
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
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
                    tw="mt-2 pl-3 pr-1"
                  >
                    <div tw="flex justify-between">
                      <div>
                        <SignpostIcon></SignpostIcon> 2,3 km /{' '}
                        <DirectionsWalkIcon></DirectionsWalkIcon> 33 min /{' '}
                        <DirectionsCarIcon></DirectionsCarIcon> 6 min{' '}
                      </div>
                      <div tw="px-2  hover:text-blue-800">
                        <a href="https://maps.app.goo.gl/jgwFmTs4ivCPEBQ77">
                          <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                        </a>
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>Hotel de 4 estrellas con vistas al acueducto.</p>
                      <p tw="pt-2">Precio aprox. 999€/noche.</p>
                      <p>TBC</p>
                      <p tw="pt-2">
                        Cuando reserveis,{' '}
                        <u>acordaos de informar que vais a nuestra boda</u> para
                        que os apliquen el precio especial.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <div tw="my-5 ">
            <img src="/separator.svg" alt="" tw="mx-auto" />
          </div>
          <div tw="flex flex-col items-center gap-5 text-primary-400">
            <p tw="text-4xl font-bold">Bares y Restaurantes</p>
            <p tw="">Todos</p>
          </div>
          <div tw="my-5 ">
            <img src="/separator.svg" alt="" tw="mx-auto" />
          </div>
          <div tw="flex flex-col items-center gap-5 text-primary-400">
            <p tw="text-4xl font-bold">Salir de fiesta</p>
            <p tw="">Teatre</p>
            <p tw="">Mandala</p>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Home;
