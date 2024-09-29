export const Logo: React.FC<{
  type?: string;
  width?: string;
  height?: string;
}> = ({ type = 'nobg', width = '40', height = '40' }) => {
  return (
    <>
      {/* eslint-disable */}
      {type == 'white' ? (
        <img src="/logo_white.png" alt="logo" width={width} />
      ) : (
        <img src="/logo_nobg.png" alt="logo" width={width} />
      )}
      {/* eslint-enable */}
    </>
  );
};
