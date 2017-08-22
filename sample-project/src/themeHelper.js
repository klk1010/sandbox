import theme from './theme';
import colors from './colors';

const themeHelper = ({ ...props }) => {
  if (!props) {
    return theme.default;
  }

  const colorThemes = Object.keys(colors);
  const propKeys = Object.keys(props);
  
  const specifier = colorThemes.filter(
    theme => propKeys.includes(theme)
  );

  if (!specifier) {
    return theme.default;
  }

  return theme[specifier];
};

export default themeHelper;
