import { fonts } from '@constants';
import * as R from 'ramda';
import * as React from 'react';

const fontsPreloadPaths = fonts.map(({ path }) => path);

const HeadFonts: React.FC = () => {
  const toFontPreloadLink = (path: string) => (
    <link key={path} as="font" crossOrigin="" href={`/static/fonts/${path}`} />
  );

  const fontsPreload = R.map(toFontPreloadLink, fontsPreloadPaths);

  return <>{fontsPreload}</>;
};

export default HeadFonts;
