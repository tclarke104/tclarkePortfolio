import { TclarkePortfolioPage } from './app.po';

describe('TclarkePortfolio App', function() {
  let page: TclarkePortfolioPage;

  beforeEach(() => {
    page = new TclarkePortfolioPage();
  });

  it('should display Travis in h1 tag', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Travis');
  });
});
