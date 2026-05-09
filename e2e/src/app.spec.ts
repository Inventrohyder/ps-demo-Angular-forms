import { expect, test } from '@playwright/test';

test.describe('user settings form', () => {
  test('renders the form controls', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'User Settings' })).toBeVisible();
    await expect(page.getByLabel('Name')).toBeVisible();
    await expect(page.getByLabel('Start Date')).toBeVisible();
    await expect(page.getByLabel('Email Special Offers')).toBeVisible();
    await expect(page.getByLabel('Subscription Type')).toBeVisible();
    await expect(page.getByLabel('Notes')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send' })).toBeVisible();
  });

  test('validates required name on submit', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Send' }).click();

    await expect(page.getByText('Enter a name')).toBeVisible();
  });
});
