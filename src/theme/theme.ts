
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',      // main blue
    colorLink: '#1890ff',         // link color
    colorTextBase: '#111111',     // base text
    fontFamily: `'Inter', sans-serif`,
    borderRadius: 6,
  },
  components: {
    Button: {
      colorPrimary: '#1890ff',
      colorTextLightSolid: '#ffffff',
      fontWeight: 600,
    },
    Typography: {
      colorTextHeading: '#141414',
      fontFamily: `'Inter', sans-serif`,
    },
  },
};

export default theme;
