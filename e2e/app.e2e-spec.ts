import { AppHelloPage } from './app.po';

describe('app-hello App', () => {
  let page: AppHelloPage;

  beforeEach(() => {
    page = new AppHelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
