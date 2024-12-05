import confetti from 'canvas-confetti';
import { useRef, useState } from 'react';

const Home = () => {
  var [msg, setMsg] = useState('Copiar al portapapeles');

  const dollarAudio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/cashier.mp3') : undefined
  );

  return (
    <>
      <div tw="flex flex-col items-center gap-5 text-primary-400 text-center px-4 pt-8">
        <p tw="text-xl" className="solitreo-regular">
          ¡Vuestra presencia es nuestro mejor regalo!
        </p>
        <p tw="text-xl" className="solitreo-regular">
          Pero para los que querais hacer una aportación para nuestra futura
          vida juntos os dejamos nuestro número de cuenta.
        </p>
        <p tw="text-xl" className="solitreo-regular">
          ¡Os lo agradecemos mucho!
        </p>
        <p tw="text-xl"></p>
        <div tw="flex flex-col items-center justify-between gap-2">
          <div>
            <p tw="text-2xl font-bold">ES74 0182 5322 2102 0102 0108</p>
          </div>

          {msg == 'Copiar al portapapeles' ? (
            <div
              tw="px-2 rounded-xl bg-primary-300 text-white hover:bg-primary-100"
              onClick={() => {
                navigator.clipboard.writeText('ES7401825322210201020108');
                dollarAudio.current?.play();
                confetti();
                setMsg('¡Copiado al portapapeles!');
              }}
            >
              {msg}
            </div>
          ) : (
            <div
              tw="px-2 rounded-xl bg-green-500 text-white"
              onClick={() => {
                navigator.clipboard.writeText('ES7401825322210201020108');
                dollarAudio.current?.play();
                confetti();
                setMsg('Que ya se ha copiado al portapapeles');
              }}
            >
              {msg}
            </div>
          )}
        </div>

        <div tw="" id="fotoRegalo"></div>
        {/*<img tw="mt-8" src="/test1.jpg" alt="foto" />*/}
      </div>
    </>
  );
};

export default Home;
