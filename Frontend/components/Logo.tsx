export const Logo: React.FC<{
  fillColor?: string;
  width?: string;
  height?: string;
}> = ({ fillColor = 'black', width = '40', height = '40' }) => {
  return (
    <>
      {/* eslint-disable */}
      <img src="/logo_white.png" alt="logo" width={width} />
      {/* eslint-enable */}
    </>
  );
};
