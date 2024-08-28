import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  const [selectedDiv, setselectedDiv] = useState('0');

  return (
    <AnimatePresence>
      <div tw="container my-1 p-1 grid grid-cols-1 gap-y-1">
        {selectedDiv != '1' ? (
          <motion.div
            whileTap={{ height: 140 }}
            initial={{ height: 100 }}
            transition={{ delay: 0.05 }}
            exit={{ height: 100 }}
            key={'activity._id'}
            tw="border border-primary-100 shadow-2xl py-2 rounded-lg flex flex-row justify-between w-full hover:ring-2 ring-secondary-200 flex-wrap"
            style={{ zIndex: 0, backgroundColor: 'white' }}
            onClick={() => setselectedDiv('1')}
          >
            <div tw="px-2 flex gap-1">
              <div>
                <AddIcon></AddIcon>
              </div>
              <p tw="text-xl font-bold">
                ¿Como podemos contactar con vosotros?
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            animate={{ height: 140 }}
            initial={false}
            transition={{ delay: 0.05 }}
            exit={{ height: 100 }}
            key={'activity._id'}
            tw="border bg-white border-primary-100 shadow-2xl py-2 rounded-lg flex flex-col gap-y-2 justify-between w-full ring-2 ring-secondary-200 flex-nowrap"
            style={{ zIndex: 0 }}
          >
            <div tw="px-2 flex gap-1">
              <div>
                <RemoveIcon></RemoveIcon>
              </div>
              <div>
                <p tw="text-xl font-bold">
                  ¿Como podemos contactar con vosotros?
                </p>
                <p>Nuestros teléfonos son:</p>
                <ul>
                  <li>
                    &nbsp; Sergio:{' '}
                    <a
                      tw="underline text-secondary-400"
                      href="tel:+34618111034"
                    >
                      618 11 10 34
                    </a>
                  </li>
                  <li>
                    &nbsp; Bea:{' '}
                    <a
                      tw="underline text-secondary-400"
                      href="tel:+34675634437"
                    >
                      675 63 44 37
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
        {selectedDiv != '2' ? (
          <motion.div
            whileTap={{ height: 140 }}
            initial={{ height: 100 }}
            transition={{ delay: 0.05 }}
            exit={{ height: 100 }}
            key={'activity._id'}
            tw="border border-primary-100 shadow-2xl py-2 rounded-lg flex flex-row justify-between w-full hover:ring-2 ring-secondary-200 flex-wrap"
            style={{ zIndex: 0, backgroundColor: 'white' }}
            onClick={() => setselectedDiv('2')}
          >
            <div tw="px-2 flex gap-1">
              <div>
                <AddIcon></AddIcon>
              </div>
              <p tw="text-xl font-bold">Bus</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            animate={{ height: 140 }}
            initial={false}
            transition={{ delay: 0.05 }}
            exit={{ height: 100 }}
            key={'activity._id'}
            tw="border bg-white border-primary-100 shadow-2xl py-2 rounded-lg flex flex-col gap-y-2 justify-between w-full ring-2 ring-secondary-200 flex-nowrap"
            style={{ zIndex: 0 }}
          >
            <div tw="px-2 flex gap-1">
              <div>
                <RemoveIcon></RemoveIcon>
              </div>
              <div>
                <p tw="text-xl font-bold">Bus</p>
                <p>TBC</p>
              </div>
            </div>
          </motion.div>
        )}{' '}
        {selectedDiv != '3' ? (
          <motion.div
            whileTap={{ height: 140 }}
            initial={{ height: 100 }}
            transition={{ delay: 0.05 }}
            exit={{ height: 100 }}
            key={'activity._id'}
            tw="border border-primary-100 shadow-2xl py-2 rounded-lg flex flex-row justify-between w-full hover:ring-2 ring-secondary-200 flex-wrap"
            style={{ zIndex: 0, backgroundColor: 'white' }}
            onClick={() => setselectedDiv('3')}
          >
            <div tw="px-2 flex gap-1">
              <div>
                <AddIcon></AddIcon>
              </div>
              <p tw="text-xl font-bold">Arroz</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            animate={{ height: 140 }}
            initial={false}
            transition={{ delay: 0.05 }}
            exit={{ height: 100 }}
            key={'activity._id'}
            tw="border bg-white border-primary-100 shadow-2xl py-2 rounded-lg flex flex-col gap-y-2 justify-between w-full ring-2 ring-secondary-200 flex-nowrap"
            style={{ zIndex: 0 }}
          >
            <div tw="px-2 flex gap-1">
              <div>
                <RemoveIcon></RemoveIcon>
              </div>
              <div>
                <p tw="text-xl font-bold">Arroz</p>
                <p>TBC</p>
              </div>
            </div>
          </motion.div>
        )}{' '}
        {selectedDiv != '4' ? (
          <motion.div
            whileTap={{ height: 140 }}
            initial={{ height: 100 }}
            transition={{ delay: 0.05 }}
            exit={{ height: 100 }}
            key={'activity._id'}
            tw="border border-primary-100 shadow-2xl py-2 rounded-lg flex flex-row justify-between w-full hover:ring-2 ring-secondary-200 flex-wrap"
            style={{ zIndex: 0, backgroundColor: 'white' }}
            onClick={() => setselectedDiv('4')}
          >
            <div tw="px-2 flex gap-1">
              <div>
                <AddIcon></AddIcon>
              </div>
              <p tw="text-xl font-bold">Alpargatas</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            animate={{ height: 140 }}
            initial={false}
            transition={{ delay: 0.05 }}
            exit={{ height: 100 }}
            key={'activity._id'}
            tw="border bg-white border-primary-100 shadow-2xl py-2 rounded-lg flex flex-col gap-y-2 justify-between w-full ring-2 ring-secondary-200 flex-nowrap"
            style={{ zIndex: 0 }}
          >
            <div tw="px-2 flex gap-1">
              <div>
                <RemoveIcon></RemoveIcon>
              </div>
              <div>
                <p tw="text-xl font-bold">Alpargatas</p>
                <p>TBC</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Home;
