import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'se.khromov.starter',
  appName: 'SvelteKit Starter',
  webDir: 'build',
  /*
  server: {
    androidScheme: 'https'
  }
  */
  server: {
		url: 'http://192.168.10.86:5173/',
		cleartext: true
	}
};

export default config;
