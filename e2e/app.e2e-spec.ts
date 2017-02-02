import { GotoeventPage } from './app.po';

describe('gotoevent App', function() {
  let page: GotoeventPage;

  beforeEach(() => {
    page = new GotoeventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
