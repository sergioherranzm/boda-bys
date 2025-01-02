import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SignpostIcon from '@mui/icons-material/Signpost';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

const Home = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <div tw="grid grid-cols-1" className="solitreo-regular">
          <div tw="mt-5 flex flex-col items-center" id="alojamiento">
            <p tw="text-4xl font-bold">Alojamientos</p>
            <div tw="container my-1 p-1 grid grid-cols-1 gap-y-1">
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen1((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen1 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">Venta Magullo&nbsp;</p>
                  <div tw="flex">
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                  </div>
                  <div tw="px-2 ml-auto hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/mhdLD6V1Dyo7ehuE6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon
                        sx={{ fontSize: 29 }}
                      ></AssistantDirectionIcon>
                    </a>
                  </div>
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
                    </div>
                    <div tw="pt-2">
                      <p>
                        Se trata del propio hotel de la finca donde se celebra
                        la boda. Tiene habitaciones sencillas.
                      </p>
                      <ul tw="pt-2" className="bulleted-inside">
                        El precio especial por noche para los invitados es
                        (todas con desayuno incluido):
                        <li tw="">
                          Habitación Doble: <b>68 €</b>
                        </li>
                        <li tw="">
                          Habitación Doble con cama Supletoria (bajo
                          disponibilidad): <b>83 €</b>{' '}
                        </li>
                        <li tw="">
                          Habitación Individual: <b>53 €</b>
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
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen2((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen2 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">Hotel Puerta Segovia&nbsp;</p>
                  <div tw="flex">
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                  </div>
                  <div tw="px-2 ml-auto hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/VDUxW94uv1ExC99E6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon
                        sx={{ fontSize: 29 }}
                      ></AssistantDirectionIcon>
                    </a>
                  </div>
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
                        <DirectionsCarIcon></DirectionsCarIcon> 1 min{' '}
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>Hotel de 4 estrellas muy cerca de la finca.</p>
                      <ul tw="pt-2" className="bulleted-inside">
                        El precio aproximado por noche es:
                        <li tw="">
                          Habitación Doble (para 1 ó 2 personas): <b>100 €</b>
                        </li>
                        <li tw="">
                          Habitación Doble con desayuno: <b>120 €</b>
                        </li>
                        <li tw="">
                          Habitación Triple: <b>120 €</b>
                        </li>
                        <li tw="">
                          Habitación Triple con desayuno: <b>150 €</b>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen3((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen3 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">Eurostars Acueducto&nbsp;</p>
                  <div tw="flex">
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                  </div>
                  <div tw="px-2 ml-auto hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/jgwFmTs4ivCPEBQ77"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon
                        sx={{ fontSize: 29 }}
                      ></AssistantDirectionIcon>
                    </a>
                  </div>
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
                        <SignpostIcon></SignpostIcon> 2,3 km /{' '}
                        <DirectionsWalkIcon></DirectionsWalkIcon> 33 min /{' '}
                        <DirectionsCarIcon></DirectionsCarIcon> 6 min{' '}
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>Hotel de 4 estrellas con vistas al acueducto.</p>{' '}
                      <p tw="pt-2">
                        El precio aproximado por noche para la habitación doble
                        es de <b>150 €</b>.
                      </p>
                      <p tw="pt-2">
                        Podeis introducir el código{' '}
                        <span
                          tw="hover:text-blue-800"
                          onClick={() => {
                            navigator.clipboard.writeText('ENLACEBYS');
                          }}
                        >
                          <b>ENLACEBYS</b>
                        </span>{' '}
                        cuando reservéis a través de la web oficial para que os
                        apliquen un 15% de descuento (sólo aplicable a la tarifa
                        de Cancelación Gratuita).
                      </p>
                      <p tw="pt-2">
                        El código solo estará disponibles hasta el 27 de Julio.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
              <div tw="border border-primary-100 shadow-md py-2 rounded-lg w-full hover:ring-2 ring-secondary-200 bg-bg-200">
                <div
                  tw="px-2 pt-1 flex gap-1"
                  onClick={() => setIsOpen4((prev) => !prev)}
                >
                  <motion.div>
                    {!isOpen4 ? <AddIcon></AddIcon> : <RemoveIcon></RemoveIcon>}
                  </motion.div>
                  <p tw="text-xl font-bold">Hotel ELE Acueducto&nbsp;</p>
                  <div tw="flex">
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                    <img
                      src="/star.png"
                      alt=""
                      style={{ height: '20px' }}
                      tw="inline"
                    />
                  </div>
                  <div tw="px-2 ml-auto hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/oWj2PLp4NkyKdNqi9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon
                        sx={{ fontSize: 29 }}
                      ></AssistantDirectionIcon>
                    </a>
                  </div>
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
                        <SignpostIcon></SignpostIcon> 2,2 km /{' '}
                        <DirectionsWalkIcon></DirectionsWalkIcon> 32 min /{' '}
                        <DirectionsCarIcon></DirectionsCarIcon> 5 min{' '}
                      </div>
                    </div>
                    <div tw="pt-2">
                      <p>Hotel modesto de 3 estrellas cerca del acueducto.</p>
                      <p tw="pt-2">
                        El precio aproximado por noche para la habitación doble
                        es de <b>90 €</b>.
                      </p>
                      <p tw="pt-2">
                        Podeis introducir el código{' '}
                        <span
                          tw="hover:text-blue-800"
                          onClick={() => {
                            navigator.clipboard.writeText('BODBEASER3008');
                          }}
                        >
                          <b>BODBEASER3008</b>
                        </span>{' '}
                        cuando reservéis a través de la web oficial para que os
                        apliquen un 10% de descuento.
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
            <ul className="bulleted">
              <p tw="underline">Bares:</p>
              <li>
                <div tw="flex">
                  <p tw="pt-1">El Sitio</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/oUmYrkHE5Xk7cLf18"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div tw="flex">
                  <p tw="pt-1">El Cochifrito</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/TcakwvKWmDf6uaQ37"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div tw="flex">
                  <p tw="pt-1">Cafés la Colonial (cafetería)</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/u4bytwNh9nT38FMJ8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div tw="flex">
                  <p tw="pt-1">Taberna Las Cuevas de Duque</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/32Phf2hMMHo2Amdz8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div tw="flex">
                  <p tw="pt-1">La Casona de San Martín</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/ZCUhBBMWQ9qXYPkf7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="bulleted">
              <p tw="underline">Restaurantes:</p>

              <li>
                <div tw="flex">
                  <p tw="pt-1">José María</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/ALMDUya74LRwZDC58"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div tw="flex">
                  <p tw="pt-1">El Bernardino</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/aHjrNQFGbDDY2QNo9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div tw="flex">
                  <p tw="pt-1">Asador Maribel</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/DuAKD41gRBpLCeHM8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div tw="flex">
                  <p tw="pt-1">Casares</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/NRk8aWpCxvgxtXMs5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div tw="flex">
                  <p tw="pt-1">El Secreto de San Clemente</p>
                  <div tw="px-2  hover:text-blue-800">
                    <a
                      href="https://maps.app.goo.gl/cSSrtG6EG7ke2AyJ9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div tw="my-5 ">
            <img src="/separator.svg" alt="" tw="mx-auto" />
          </div>
          <div tw="flex flex-col items-center gap-5 text-primary-400">
            <p tw="text-4xl font-bold">Salir de fiesta</p>
            <p tw="px-11 text-center">
              En Segovia la zona de fiesta se encuentra cerca de la Plaza Mayor.
            </p>
            <div tw="">
              <ul className="bulleted">
                <li>
                  <div tw="flex">
                    <p tw="pt-1">Vogue (bar de copas)</p>
                    <div tw="px-2  hover:text-blue-800">
                      <a
                        href="https://maps.app.goo.gl/raWpcqdPPkkptsko9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div tw="flex">
                    <p tw="pt-1">Mandala (discoteca)</p>
                    <div tw="px-2  hover:text-blue-800">
                      <a
                        href="https://maps.app.goo.gl/8dyAbFk2DSwLLYtR8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div tw="flex">
                    <p tw="pt-1">Theatre (discoteca)</p>
                    <div tw="px-2  hover:text-blue-800">
                      <a
                        href="https://maps.app.goo.gl/EjHKceYJyS6XoaPUA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div tw="flex">
                    <p tw="pt-1">La Locura (discoteca)</p>
                    <div tw="px-2  hover:text-blue-800">
                      <a
                        href="https://maps.app.goo.gl/NsP5oDKhdEwGhJe16"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AssistantDirectionIcon fontSize="medium"></AssistantDirectionIcon>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p tw=""></p>
            <p tw=""></p>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Home;
