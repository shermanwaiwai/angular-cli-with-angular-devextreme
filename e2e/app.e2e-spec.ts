import { Ng2DevextremeDemoPage } from './app.po';

describe('ng2-devextreme-demo App', function() {
  let page: Ng2DevextremeDemoPage;

  beforeEach(() => {
    page = new Ng2DevextremeDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
