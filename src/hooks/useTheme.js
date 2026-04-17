import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Current portfolio is hardcoded dark theme
    document.documentElement.classList.add('dark');
  }, []);

  return { theme };
};

export default useTheme;
