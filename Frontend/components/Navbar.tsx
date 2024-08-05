import Link from 'next/link';
import tw from 'twin.macro';
import { GrScheduleNew, GrTicket, GrSearch } from 'react-icons/gr';
import { useState } from 'react';

const MenuItem = tw.div`py-4 px-4 whitespace-nowrap border-b-2 border-transparent text-black transition-all hover:bg-secondary-200 hover:border-secondary-400 hover:text-white text-sm`;

const MenuItemStatic = tw.div`py-4 px-2 whitespace-nowrap border-b-2 border-transparent text-black text-sm`;

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div tw="flex items-center justify-between border-b border-gray-400 py-8">
      <nav>
        <section tw="flex lg:hidden">
          <div tw="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
            <span tw="block h-0.5 w-8 animate-pulse border-gray-400 border-2"></span>
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
                <a href="/about">About</a>
              </li>
              <li tw="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li tw="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact21</a>
              </li>
            </ul>
          </div>
        </section>

        <ul tw="hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact22</a>
          </li>
        </ul>
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
