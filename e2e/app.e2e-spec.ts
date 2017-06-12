import { DumbshopperPage } from './app.po';

describe('dumbshopper App', () => {
  let page: DumbshopperPage;

  beforeEach(() => {
    page = new DumbshopperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
