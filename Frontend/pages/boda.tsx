const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center justify-center">
        <div tw="" id="fotoBoda"></div>
        {/*<img tw="max-w-xl" src="/fotomaton.jpeg" alt="foto" />*/}
        <div tw="mt-6 px-4" className="solitreo-regular">
          {/*<div tw="flex flex-col items-center text-primary-400 text-xl text-center">
            <p tw="text-4xl font-bold text-center">La Previa</p>
            <p tw="">Nos juntaremos el</p>
            <p tw="text-2xl font-bold">29 de agosto de 2025 a las 20:00</p>
            <p tw="">en el bar</p>
            <p tw="text-2xl font-bold">TBD</p>
            <p tw="">y la posterior celebración</p>
          </div>
          <div tw="my-5">
            <img src="/separator.svg" alt="" />
          </div>*/}
          <div tw="flex flex-col items-center text-primary-400 text-xl text-center">
            <p tw="text-4xl font-bold text-center">La Boda</p>
            <p tw="">La ceremonia civil será el</p>
            <p tw="text-2xl font-bold">30 de agosto de 2025 a las 13:00</p>
            <p tw="">en la finca</p>
            <p tw="text-2xl font-bold">El Molino de la Venta</p>
            <p tw="">y la posterior celebración</p>
            <p tw="">en el mismo lugar.</p>
          </div>
          <div tw="my-5">
            <img src="/separator.svg" alt="" />
          </div>
          <div tw="flex flex-col items-center text-primary-400">
            <p tw="mb-2 text-4xl font-bold">Lugar</p>
            <div></div>
            <p tw="font-bold">El Molino de la Venta</p>
            <p>La lastrilla, Segovia</p>
            <div tw="my-2 border border-primary-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31263.14741867418!2d-4.122707321162285!3d40.95086411103645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd413fe7516d2399%3A0x86a435ba7b95cefd!2sFinca%20el%20Molino%20de%20la%20Venta!5e0!3m2!1sen!2ses!4v1729962762219!5m2!1sen!2ses"
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/Cxipa5xk8sJJZnDC8"
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
          <div
            tw="flex flex-col items-center gap-5 text-primary-400 mb-5"
            id="transporte"
          >
            <p tw="text-4xl font-bold text-center">Cómo llegar</p>
            <div tw="">
              <ul tw="pl-4" className="bulleted">
                <li>
                  <p tw="text-xl font-bold inline">Coche:</p>
                  <p tw="inline"> hay sitio para aparcar en los alrededores</p>
                </li>
                <li>
                  <p tw="text-xl font-bold inline">Taxi:</p>
                  <p tw="inline"> aprox. 5 min desde el acueducto</p>
                  <p tw="pl-10">Teléfonos Radiotaxi Segovia:</p>
                  <ul tw="pl-11 text-blue-800 ">
                    <li>
                      <a
                        tw="cursor-pointer hover:text-secondary-400"
                        href="tel:+34921445000"
                      >
                        921 44 50 00
                      </a>
                    </li>
                    <li>
                      <a
                        tw="cursor-pointer hover:text-secondary-400"
                        href="tel:+34921922499"
                      >
                        921 92 24 99
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p tw="text-xl font-bold inline">Autobús urbano:</p>
                  <p tw="inline"> aprox. 15 min desde el acueducto</p>
                  <p tw="pl-10">
                    <a
                      href="https://infosegovia.com/linea-4-carretera-de-soria-hospital-general/"
                      target="_blank"
                      rel="noopener noreferrer"
                      tw="cursor-pointer  text-blue-800 hover:text-secondary-400"
                    >
                      Línea 4
                    </a>{' '}
                    - Hasta <i>Carretera de Soria 1</i>
                  </p>
                  <a
                    href="https://maps.app.goo.gl/AgbyDmaKoi8MRfSe6"
                    target="_blank"
                    rel="noopener noreferrer"
                    tw="pl-10 underline cursor-pointer hover:text-secondary-400"
                  >
                    Ver ruta
                  </a>
                </li>
                <li>
                  <p tw="text-xl font-bold inline">Búho:</p>
                  <p tw="inline"> para volver hasta el acueducto</p>
                  <p tw="pl-10">
                    <a
                      href="https://infosegovia.com/linea-b-buho/"
                      target="_blank"
                      rel="noopener noreferrer"
                      tw="cursor-pointer  text-blue-800 hover:text-secondary-400"
                    >
                      Línea B
                    </a>{' '}
                    - Desde <i>Carretera de Soria 1</i>
                  </p>
                  <p tw="pl-10">Sale a las horas en punto (23h, 00h, 01h...)</p>
                </li>
                <li>
                  <p tw="text-xl font-bold inline">A pie:</p>
                  <p tw="inline"> aprox. 30 min desde el acueducto</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
