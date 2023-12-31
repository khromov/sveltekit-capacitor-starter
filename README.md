# SvelteKit Capacitor starter

## Presentation

See this presentation that was given on This Week in Svelte:

[YouTube Presentation link](https://www.youtube.com/watch?v=jfBjmczZwRc&t=405s)

<img src="https://github.com/khromov/sveltekit-capacitor-starter/assets/1207507/a465f6f8-e0f2-4074-a2ec-6f820f592b54">

[Presentation link](https://www.youtube.com/watch?v=jfBjmczZwRc&t=405s)

This is a simple demo project of SvelteKit + Capacitor. It is not a complete starter but more of an example of a Capacitor setup. 

To add all the functionality, copy the contents of `demo/complete/+page.svelte` to `src/routes/+page.svelte`.

This demo only has iOS added to the project. Android can optionally be added via [the instructions in the Capacitor documentation](https://capacitorjs.com/docs/android).

Basic steps:

1. Follow [the setup guide for setting up your environment under iOS](https://capacitorjs.com/docs/getting-started/environment-setup)
1. Edit `capacitor.config.ts`, under `server.url`, add your local IP address.
1. Perform the commands below

```bash
nvm use
npm i
npm run dev
```

1. Start XCode and open the `/ios` folder in it via the "Open a project or file" button of the start screen.
1. Start the app either on a physical device or on an emulator via the Run ("Play") button


### Automating building of iOS/Android bundles via GitHub Actions

See these blog posts:

- [Build your Capacitor iOS app bundle using GitHub Actions](https://khromov.se/build-your-capacitor-ios-app-bundle-using-github-actions/)
- [Build your Capacitor Android app bundle using GitHub Actions](https://khromov.se/build-your-capacitor-android-app-bundle-using-github-actions/)

### Further reading

- [How I published a gratitude journaling app for iOS and Android using SvelteKit and Capacitor](https://khromov.se/how-i-published-a-gratitude-journaling-app-for-ios-and-android-using-sveltekit-and-capacitor/)
- [Building a privacy-friendly, self-hosted application architecture with SvelteKit](https://khromov.se/building-a-privacy-friendly-self-hosted-application-architecture-with-sveltekit/)
