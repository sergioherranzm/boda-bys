import { useState } from 'react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div tw="flex items-center border-b border-gray-400 px-4 w-screen sticky top-0 bg-bg-100">
      <nav tw="w-screen">
        <section tw="flex items-center w-full py-1 lg:hidden">
          <div tw="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
          </div>

          <div
            tw="mr-auto ml-auto whitespace-nowrap text-logo-000"
            className="lobster-regular"
          >
            <a href="/">
              <div tw="flex place-content-center">
                <p tw="text-2xl font-bold gap-5">BEA Y SERGIO</p>
              </div>
              <div tw="flex place-content-center">
                <p tw="">30 DE AGOSTO DE 2025</p>
              </div>
            </a>
          </div>

          <div tw="space-y-2">
            <span tw="block h-0.5 w-8 border-transparent border-2"></span>
            <span tw="block h-0.5 w-8 border-transparent border-2"></span>
            <span tw="block h-0.5 w-8 border-transparent border-2"></span>
          </div>

          <div
            tw="bg-bg-200"
            className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}
          >
            <div
              tw="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                tw="h-8 w-8 border-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <Logo type="nobg" width="200" />
            <ul tw="flex flex-col items-center justify-between min-h-[250px] font-bold text-logo-000">
              <li tw="border-b border-gray-400 mt-4 mb-6 uppercase">
                <a href="/">Inicio</a>
              </li>
              <li tw="border-b border-gray-400 my-6 uppercase">
                <a href="/confirmacion">Confirmar Asistencia</a>
              </li>
              {/*<li tw="border-b border-gray-400 my-6 uppercase">
                <a href="/fotos">Fotos</a>
              </li>*/}
              <li tw="border-b border-gray-400 my-6 uppercase">
                <a href="/boda">La Boda</a>
              </li>
              <li tw="border-b border-gray-400 my-6 uppercase">
                <a href="/logistica">Recomendaciones</a>
              </li>
              <li tw="border-b border-gray-400 my-6 uppercase">
                <a href="/lista">Regalos</a>
              </li>
              <li tw="border-b border-gray-400 my-6 uppercase">
                <a href="/faq">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>
        </section>

        <div tw="hidden lg:flex justify-between items-center py-1">
          {/*NAVBAR EXTENDIDA EN PANTALLAS GRANDES*/}
          <Logo type="nobg" width="65" />
          <div tw="w-full px-4">
            <ul tw="space-x-5 flex items-center text-center font-semibold text-logo-000">
              <li tw="px-2 rounded hover:underline hover:bg-bg-200 hover:py-5">
                <a href="/">Inicio</a>
              </li>
              <li tw="px-2 rounded hover:underline hover:bg-bg-200 hover:py-5">
                <a href="/confirmacion">Confirmar Asistencia</a>
              </li>
              {/*<li tw="px-2 rounded hover:underline hover:bg-bg-200 hover:py-5">
                <a href="/fotos">Fotos</a>
              </li>*/}
              <li tw="px-2 rounded hover:underline hover:bg-bg-200 hover:py-5">
                <a href="/boda">La Boda</a>
              </li>
              <li tw="px-2 rounded hover:underline hover:bg-bg-200 hover:py-5">
                <a href="/logistica">Recomendaciones</a>
              </li>
              <li tw="px-2 rounded hover:underline hover:bg-bg-200 hover:py-5">
                <a href="/lista">Regalos</a>
              </li>
              <li tw="px-2 rounded hover:underline hover:bg-bg-200 hover:py-5">
                <a href="/faq">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          <div
            tw="whitespace-nowrap px-8 text-logo-000"
            className="lobster-regular"
          >
            <div tw="flex place-content-center">
              <p tw="text-2xl font-bold">BEA Y SERGIO</p>
            </div>
            <div tw="flex place-content-center">
              <p tw="text-xl">30 DE AGOSTO DE 2025</p>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};
