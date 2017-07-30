import { Spoquery3Page } from './app.po';

describe('spoquery3 App', () => {
  let page: Spoquery3Page;

  beforeEach(() => {
    page = new Spoquery3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
