import { expect, test } from '@playwright/test'

test('homepage shows the main profile framing', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Kirill Zaitsev/i)
  await expect(page.getByRole('heading', { name: 'Kirill Zaitsev' })).toBeVisible()
  await expect(page.getByText('Focus Areas')).toBeVisible()
  await expect(page.getByRole('link', { name: /GitHub profile/i })).toBeVisible()
})

test('projects page keeps the seeded project list visible', async ({ page }) => {
  await page.goto('/projects')

  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '@omnicajs/vue-remote' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'modulify/pkg' })).toBeVisible()
})
