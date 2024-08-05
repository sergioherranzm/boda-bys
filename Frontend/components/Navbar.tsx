import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import tw from 'twin.macro';
import { GrScheduleNew, GrTicket, GrSearch } from 'react-icons/gr';

const MenuItem = tw.div`py-4 px-4 whitespace-nowrap border-b-2 border-transparent text-black transition-all hover:bg-secondary-200 hover:border-secondary-400 hover:text-white text-sm`;

const MenuItemStatic = tw.div`py-4 px-2 whitespace-nowrap border-b-2 border-transparent text-black text-sm`;

const LoginStatus = () => {
  const { user } = useUser();

  return (
    <div tw="flex justify-end items-center">
      {!user && (
        <Link href="/api/auth/login">
          <a>
            <MenuItem>Sign in</MenuItem>
          </a>
        </Link>
      )}
      {user && (
        <>
          <Link href="#">
            <a>
              <MenuItemStatic>{user.nickname}</MenuItemStatic>
            </a>
          </Link>

          <Link href="/api/auth/logout">
            <a>
              <MenuItem>Logout</MenuItem>
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export const Navbar = () => {
  const { user } = useUser();

  return (
    <nav tw="text-secondary-400 bg-primary-100 font-semibold">
      <div tw="container flex justify-between">
        <div tw="flex items-center">
          {user && (
            <>
              <a href="/schedule">
                <MenuItem>
                  <GrScheduleNew size={30} />
                </MenuItem>
              </a>
              <a href="/reserves/list">
                <MenuItem>
                  <GrTicket size={30} />
                </MenuItem>
              </a>
              <a href="/search">
                <MenuItem>
                  <GrSearch size={30} />
                </MenuItem>
              </a>
            </>
          )}
        </div>

        <LoginStatus />
      </div>
    </nav>
  );
};
