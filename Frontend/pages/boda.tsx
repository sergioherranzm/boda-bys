const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center justify-center">
        <div tw="" id="fotoBoda"></div>
        {/*<img tw="max-w-xl" src="/fotomaton.jpeg" alt="foto" />*/}
        <div tw="mt-8 flex flex-col items-center gap-5 text-primary-400">
          <p tw="text-xl font-bold mt-10">
            La ceremonia civil será el 30.08.2025 en la finca el Molino de la
            Venta a las 13:00, y la posterior celebración en el mismo lugar.
          </p>
          <p tw="text-xl">Sábado, 30 de agosto de 2025</p>
          <p tw="text-xl">13:00 h</p>
        </div>
        <div tw="flex flex-col items-center gap-5 text-primary-400">
          <p tw="text-xl">El Molino de la Venta</p>
          <p>La lastrilla, Segovia, 122115</p>
          <a
            href="https://maps.app.goo.gl/Cxipa5xk8sJJZnDC8"
            tw="underline cursor-pointer hover:text-secondary-400"
          >
            Ver en Maps
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.3836205227298!2d-4.100674163709812!3d40.96183010361241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd413fe7516d2399%3A0x86a435ba7b95cefd!2sFinca%20el%20Molino%20de%20la%20Venta!5e0!3m2!1sen!2ses!4v1724507098972!5m2!1sen!2ses"
            width="100%"
            height="250"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div tw="flex flex-col items-center gap-5 text-primary-400">
          <p tw="text-4xl font-bold">Como llegar</p>
          <p tw="text-xl">
            Si te alojas en uno de los hoteles de la zona podrás llegar andando
            fácilmente.
          </p>
          <a
            href="/logistica"
            tw="mr-2 underline cursor-pointer hover:text-secondary-400"
          >
            Ver alojamientos recomendados
          </a>
          <p tw="text-xl">
            En caso de que estés alojado en el centro de la ciudad, hay autobús
            directo o podrás llegar rápidamente en taxi.
          </p>
        </div>
        <a
          href="/logistica"
          tw="mr-2 underline cursor-pointer hover:text-secondary-400"
        >
          Ver autobuses
        </a>
        <a
          href="/logistica"
          tw="mr-2 underline cursor-pointer hover:text-secondary-400"
        >
          Telefono de taxi Segovia
        </a>
      </div>
    </>
  );
};

export default Home;
