import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'se.khromov.starter',
  appName: 'SvelteKit Starter',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
