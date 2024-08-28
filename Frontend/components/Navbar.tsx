import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div tw="flex items-center border-b border-gray-400 py-4 px-4 w-screen">
      <nav tw="w-screen">
        <section tw="flex items-center w-full lg:hidden">
          <div tw="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
          </div>

          <div tw="mr-auto ml-auto whitespace-nowrap">
            <div tw="flex place-content-center">
              <p tw="text-xl font-bold gap-5 text-primary-400">
                BEA &amp; SERGIO
              </p>
            </div>
            <div tw="flex place-content-center">
              <p tw="">30 DE AGOSTO DE 2025</p>
            </div>
          </div>

          <div tw="space-y-2">
            <span tw="block h-0.5 w-8 border-transparent border-2"></span>
            <span tw="block h-0.5 w-8 border-transparent border-2"></span>
            <span tw="block h-0.5 w-8 border-transparent border-2"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
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
            <ul tw="flex flex-col items-center justify-between min-h-[250px]">
              <li tw="border-b border-gray-400 my-8 uppercase">
                <a href="/">Inicio</a>
              </li>
              <li tw="border-b border-gray-400 my-8 uppercase">
                <a href="/confirmacion">Confirmación</a>
              </li>
              <li tw="border-b border-gray-400 my-8 uppercase">
                <a href="/boda">La Boda</a>
              </li>
              <li tw="border-b border-gray-400 my-8 uppercase">
                <a href="/logistica">Alojamiento y Transporte</a>
              </li>
              <li tw="border-b border-gray-400 my-8 uppercase">
                <a href="/lista">Lista de Bodas</a>
              </li>
              <li tw="border-b border-gray-400 my-8 uppercase">
                <a href="/faq">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>
        </section>

        <div tw="hidden lg:flex justify-between items-center">
          <ul tw="space-x-8 flex">
            <li tw="hover:underline">
              <a href="/">Inicio</a>
            </li>
            <li tw="hover:underline">
              <a href="/confirmacion">Confirmación</a>
            </li>
            <li tw="hover:underline">
              <a href="/boda">La Boda</a>
            </li>
            <li tw="hover:underline">
              <a href="/logistica">Alojamiento y Transporte</a>
            </li>
            <li tw="hover:underline">
              <a href="/lista">Lista de Bodas</a>
            </li>
            <li tw="hover:underline">
              <a href="/faq">Preguntas Frecuentes</a>
            </li>
          </ul>
          <div tw="whitespace-nowrap px-8">
            <div tw="flex place-content-center">
              <p tw="text-2xl font-bold text-primary-400">BEA &amp; SERGIO</p>
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
        background: white;
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
