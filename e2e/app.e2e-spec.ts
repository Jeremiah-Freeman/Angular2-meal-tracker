import { Algular2MealTrackerPage } from './app.po';

describe('algular2-meal-tracker App', () => {
  let page: Algular2MealTrackerPage;

  beforeEach(() => {
    page = new Algular2MealTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
