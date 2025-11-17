import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    video: true,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    videoCompression: 15,
    trashAssetsBeforeRuns: true,
  },
  video: true,
  videosFolder: 'cypress/videos',
  screenshotOnRunFailure: true,
  videoCompression: 15,
  trashAssetsBeforeRuns: true,
})
