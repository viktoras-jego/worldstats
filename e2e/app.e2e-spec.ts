import { WorldstatsPage } from './app.po';

describe('worldstats App', () => {
  let page: WorldstatsPage;

  beforeEach(() => {
    page = new WorldstatsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
