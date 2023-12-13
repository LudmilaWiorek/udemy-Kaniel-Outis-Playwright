import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: 'tests',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'only-on-failure',
    trace: 'on',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],
}
export default config
