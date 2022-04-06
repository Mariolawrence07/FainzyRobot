import {
  ReactComponent as LogoWhitePlain,
} from 'assets/svgs/logo-white-colored.svg';
import {ReactComponent as LogoIcon} from 'assets/svgs/logo.svg';

/**
 *
 * @param {LogoProps} props
 */
function Logo (props) {
  const {variant, ...rest} = props;

  const ResolvedLogo = LOGO_MAP[variant];

  return <ResolvedLogo {...rest} />;
}

Logo.defaultProps = {
  variant: 'icon',
};

export default Logo;

const LOGO_MAP = {
  'logo-white': LogoWhitePlain,
  icon: LogoIcon,
};

/**
 * @typedef {{
 * variant: keyof typeof LOGO_MAP
 * }} LogoProps
 */
