import { Logo2Page } from './app.po';

describe('logo2 App', () => {
  let page: Logo2Page;

  beforeEach(() => {
    page = new Logo2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
