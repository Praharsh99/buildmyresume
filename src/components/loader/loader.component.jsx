import React, { useEffect } from 'react';

import { CircularProgress } from '@material-ui/core';

import './loader.style.css';

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return <CircularProgress />;
};

export default Loader;
