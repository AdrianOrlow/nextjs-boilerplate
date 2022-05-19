import { ValueOf } from '@typeDefs/common';
import getConfig from 'next/config';
import { DefaultTheme } from 'styled-components';

interface Font {
  type: keyof DefaultTheme['fontFamily'];
  name: ValueOf<DefaultTheme['fontFamily']>;
  path: string;
  weight: number;
}

const { publicRuntimeConfig } = getConfig();
export const BASE_PATH =
  typeof window !== 'undefined'
    ? window.location.origin
    : publicRuntimeConfig.BASE_PATH || 'https://BASE_DOMAIN.LTD';

export const fonts: Font[] = [
  {
    type: 'primary',
    name: 'FONT',
    path: 'FONT/FONT-TYPE.ttf',
    weight: 300,
  },
];

export const paths = {
  home: '/',
};

export const titleTemplate = '%s | PAGE_TITLE';

export const Cookies = {};
