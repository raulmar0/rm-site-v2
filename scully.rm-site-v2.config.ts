import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'rm-site-v2',
  outDir: './dist/static',
  routes: {
    '/blog': {
        type: 'json',
    },
    '/projects': {
      type: 'json',
    },
    '/about': {
      type: 'json',
    }
  },
  extraRoutes: ['/about', '/blog', '/projects'],
};
