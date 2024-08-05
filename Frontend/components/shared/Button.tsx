import tw from 'twin.macro';

export const Button: React.FC<{
  children;
  variant?: 'neutral' | 'submit' | 'delete';
  icon?: any;
  disabled?: boolean;
  onClick?: () => void;
}> = (
  { children, variant = 'neutral', icon, onClick, disabled = false },
  ref
) => {
  return (
    <button
      onClick={onClick}
      css={[
        tw`bg-primary-300 text-white px-4 py-1 rounded-md flex gap-1 items-center whitespace-nowrap hover:bg-primary-400 transition-all`,
        variant == 'submit' && tw`bg-blue-500 hover:bg-blue-600`,
        variant == 'delete' && tw`bg-red-500 hover:bg-red-600`,
        disabled && tw`opacity-50 bg-gray-400 hover:bg-gray-400`,
      ]}
      {...(disabled ? { disabled: true } : {})}
    >
      {icon} {children}
    </button>
  );
};
