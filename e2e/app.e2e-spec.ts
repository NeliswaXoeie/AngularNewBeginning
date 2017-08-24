import { AngularTheBeginningPage } from './app.po';

describe('angular-the-beginning App', () => {
  let page: AngularTheBeginningPage;

  beforeEach(() => {
    page = new AngularTheBeginningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
