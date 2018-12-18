import { AngularNgrxMediumPage } from './app.po';

describe('angular-ngrx-medium App', function() {
  let page: AngularNgrxMediumPage;

  beforeEach(() => {
    page = new AngularNgrxMediumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
