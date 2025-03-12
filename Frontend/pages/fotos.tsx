import { FORM_URL } from '../lib/config';

const Home = () => {
  return (
    <>
      <div tw="mt-4 mx-auto ">
        <div
          tw="px-4 text-primary-400 mx-auto max-w-max"
          className="solitreo-regular"
        >
          <p tw="text-4xl font-bold text-center">Fotos</p>
          <p tw="mt-2 text-center">
            Comparte en este álbum de Google Fotos tus fotos de la boda.
          </p>
          <div tw="text-4xl font-bold text-center underline cursor-pointer hover:text-secondary-400 my-16">
            <a
              href="https://photos.app.goo.gl/vmmiqM5RiUiptH8y9"
              target="_blank"
              rel="noreferrer"
            >
              ALBUM
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
