const Home = () => {
  return (
    <>
      <div tw="flex flex-col gap-5 text-primary-400 p-8">
        <ul tw="list-disc">
          <li>
            <p tw="text-xl font-bold">¿Como podemos contactar con vosotros?</p>
            <p>Puedes contactarnos por teléfono:</p>
            <ul>
              <li>
                Sergio:{' '}
                <a tw="underline text-secondary-400" href="tel:0034618111034">
                  618 11 10 34
                </a>
              </li>
              <li>
                Bea:{' '}
                <a tw="underline text-secondary-400" href="tel:0034675634437">
                  675 63 44 37
                </a>
              </li>
            </ul>
          </li>
          <li>
            <p tw="text-xl font-bold">¿Cuánto durará la boda?</p>
            <p>TBC</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
