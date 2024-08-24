const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center justify-center">
        <div tw="flex flex-col items-center gap-5 text-primary-400">
          <p tw="text-4xl font-bold">Alojamientos</p>
          <p tw="text-xl">TBC</p>
        </div>
        <div tw="flex flex-col items-center gap-5 text-primary-400">
          <p tw="text-4xl font-bold">Lugar</p>
          <p tw="text-xl">El Molino de la Venta</p>
          <p>La lastrilla, Segovia, 122115</p>

          <a
            href="https://maps.app.goo.gl/Cxipa5xk8sJJZnDC8"
            tw="text-xl mr-2 hover:underline cursor-pointer hover:text-secondary-400"
          >
            Maps
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
