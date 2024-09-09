import React from 'react';
import { useMediaQuery } from 'react-responsive';

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 960,
  lg: 1140,
  xl: Infinity,
};

const App = () => {
  const isXs = useMediaQuery({ query: `(max-width: ${breakpoints.xs}px)` });
  const isSm = useMediaQuery({ query: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px)` });
  const isLg = useMediaQuery({ query: `(min-width: ${breakpoints.lg}px)` });

  return (
    <div>
      {isXs && <p>Extra Small Screen</p>}
      {isSm && <p>Small to Medium Screen</p>}
      {isLg && <p>Large Screen</p>}
    </div>
  );
};

export default App;