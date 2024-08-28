import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Home = () => {
  return (
    <>
      <div tw="flex flex-col items-center gap-5 text-primary-400 text-center p-8">
        <p tw="text-xl">¡Vuestra presencia es nuestro mejor regalo!</p>
        <p tw="text-xl">
          Pero para los que querais hacer una aportación para nuestra futura
          vida juntos os dejamos nuestro número de cuenta.
        </p>
        <p tw="text-xl">¡Os lo agradecemos mucho!</p>
        <p tw="text-xl"></p>
        <div tw="flex items-center justify-between gap-5">
          <div>
            <p tw="text-2xl font-bold">ES74 0182 5322 2102 0102 0108</p>
          </div>
          <div
            tw="underline"
            onClick={() => {
              navigator.clipboard.writeText('ES7401825322210201020108');
            }}
          >
            <ContentCopyIcon fontSize="large"></ContentCopyIcon>
          </div>
        </div>
        <div tw="my-8">
          <img src="#" alt="foto" />
        </div>
      </div>
    </>
  );
};

export default Home;
