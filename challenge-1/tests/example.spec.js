// @ts-check
import  { test, expect } from '@playwright/test'
const PREFIX_IMAGE = 'https://textoverimage.moesif.com/image'
const LOCALHOST_URL = 'http://localhost:5173/'

test('test has image an text', async ({ page }) => {
  await page.goto(LOCALHOST_URL)


  // Click the get started link.
  const p = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const pInner = await p.textContent()
  const imgSrc = await img.getAttribute('src')

  await expect(pInner?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(PREFIX_IMAGE)).toBeTruthy()

});

