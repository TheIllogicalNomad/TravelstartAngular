import { AngularCRUD2Page } from './app.po';

describe('angular-crud2 App', () => {
  let page: AngularCRUD2Page;

  beforeEach(() => {
    page = new AngularCRUD2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
