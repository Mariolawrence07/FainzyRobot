// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../tailwind.config';

// export const resolvedTailwindConfig = resolveConfig (tailwindConfig);

export const RouteEnum = {
  LOGIN: '/login',
  REGISTER: '/register',
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCTS_DETAIL: '/products/:slug',
  ABOUT: '/about',
  CONTACT_US: '/contact-us',
  BLOG: '/blog',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ACCOUNT: '/account',
  ADMIN_DASHBOARD: '/admin',
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_PRODUCTS_ADD: '/admin/products/add',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_DISTRIBUTORS: '/admin/distributors',
};

export const MediaQueryBreakpointEnum = {
  // '2xl': `(min-width: ${resolvedTailwindConfig.theme.screens['2xl']})`,
  // lg: `(min-width: ${resolvedTailwindConfig.theme.screens.lg})`,
  // md: `(min-width: ${resolvedTailwindConfig.theme.screens.md})`,
  // sm: `(min-width: ${resolvedTailwindConfig.theme.screens.sm})`,
  // xl: `(min-width: ${resolvedTailwindConfig.theme.screens.xl})`,
};

export const CurrencyEnum = {
  USD: {
    code: 'USD',
    symbol: '\u0024',
  },
  US: {
    code: 'USD',
    symbol: '\u0024',
  },
  NGN: {
    code: 'NGN',
    symbol: '\u20A6',
  },
  NG: {
    code: 'NGN',
    symbol: '\u20A6',
  },
};

export const RtkqTagEnum = {};
