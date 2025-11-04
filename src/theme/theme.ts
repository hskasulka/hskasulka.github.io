
import type { ThemeConfig } from 'antd';

const albertSansStack =
  `'Albert Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`;

const theme: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: '#52a8feff',      // main blue
    colorLink: '#1890ff',         // link color
    colorTextBase: '#2a2a2aff',     // base text
    colorError: '#fe525bff',
    colorSuccess: '#52fe80ff',
    fontFamily: albertSansStack,
    borderRadius: 6,
  },
  components: {
    Button: {
      colorPrimary: '#1890ff',
      colorTextLightSolid: '#ffffff',
      fontWeight: 600,
    },
    Typography: {
      colorTextHeading: '#2f2f34ff',
      colorTextBase: '#2a2a2aff',
      fontFamily: `'Inter', sans-serif`,
    },
  },
};

export default theme;
