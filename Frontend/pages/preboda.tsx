import { FORM_URL } from '../lib/config';

const Home = () => {
  return (
    <>
      <div tw="mt-6 mx-auto">
        <div
          tw="px-4 text-primary-400 mx-auto max-w-max"
          className="solitreo-regular"
        >
          <div tw="flex flex-col items-center text-primary-400 text-xl text-center">
            <p tw="text-4xl font-bold text-center">La Previa</p>
            <p tw="mt-4">
              Para todos aquellos que quieran ir canlentando antes de la boda,
              nos juntaremos el
            </p>
            <p tw="text-2xl font-bold">viernes 29 de agosto de 2025</p>
            <p tw="">Hora:</p>
            <p tw="text-2xl font-bold"> TBD (por la tarde)</p>{' '}
            <p tw="">Lugar:</p>
            <p tw="text-2xl font-bold">
              Pinillos de Polendos (al 97,5% seguro)
            </p>{' '}
            <div tw="my-2 border border-primary-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12030.101918763376!2d-4.125804!3d41.079364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4137197e00e377%3A0x4d126eb39a3d1120!2s40397%20Pinillos%20de%20Polendos%2C%20Segovia!5e0!3m2!1sen!2ses!4v1749055955478!5m2!1sen!2ses"
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/3dmxA7VYeFqfDBos7"
              target="_blank"
              rel="noopener noreferrer"
              tw="cursor-pointer px-4 pt-1 rounded-xl bg-primary-300 text-white hover:bg-primary-100"
            >
              Ver en Google Maps
            </a>
          </div>
          <div tw="my-5">
            <img src="/separator.svg" alt="" />
          </div>
        </div>
        <div tw="z-0" className="gravitas-one-regular">
          <div tw="z-0 flex flex-col items-center relative">
            <img tw="" src="/wantu.jpeg" alt="foto" />
            <div tw="absolute top-16">
              <p tw="text-orange-500 font-bold text-3xl inline">WE WANT </p>
              <p tw="text-red-700 font-bold text-4xl inline">YOU!</p>
            </div>
            <div tw="absolute bottom-16">
              <p tw="text-orange-500 font-bold text-3xl">FOR</p>{' '}
              <p tw="text-red-700 font-bold text-4xl">
                <i>THE PREVIA</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
