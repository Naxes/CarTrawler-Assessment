import Button from '@/atoms/Button';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  css?: object,
};

const ThemeToggle = ({ css }: Props) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  return (
    <Button
      outlined
      color="slate"
      onClick={toggleTheme}
      css={{ p: '$2' , ...css }}
    >
      <FontAwesomeIcon icon={faAdjust} width="15" />
    </Button>
  );
};

export default ThemeToggle;
