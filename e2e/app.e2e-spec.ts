import { Ng2AnimationPage } from './app.po';

describe('ng2-animation App', () => {
  let page: Ng2AnimationPage;

  beforeEach(() => {
    page = new Ng2AnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
