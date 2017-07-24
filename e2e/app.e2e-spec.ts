import { Ng2PractisePage } from './app.po';

describe('ng2-practise App', () => {
  let page: Ng2PractisePage;

  beforeEach(() => {
    page = new Ng2PractisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
