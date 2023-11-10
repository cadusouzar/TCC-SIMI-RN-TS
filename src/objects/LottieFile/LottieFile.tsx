import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';

type PropsLottieFile = {
  variant: string
  width: number
  height: number
};

export const LottieFile: React.FC<PropsLottieFile> = ({ variant, width, height}) => {
  const [lottieSource, setLottieSource] = useState<any>(null);

  useEffect(() => {
    let importedLottieSource;
    if (variant === 'fire') {
      importedLottieSource = require('./fire.json');
    } else if (variant === 'fumaca') {
      importedLottieSource = require('./fumaca.json');
    } else if(variant === 'gas') {
      importedLottieSource = require('./gas.json')
    } else {
      throw new Error(`Variante desconhecida: ${variant}`);
    }
    
    setLottieSource(importedLottieSource);
  }, [variant]);

  if (!lottieSource) {
    return null;
  }

  return (
    <LottieView
      autoPlay
      style={{
        width: width,
        height: height,
      }}
      source={lottieSource}
      loop={true}
    />
  );
};
