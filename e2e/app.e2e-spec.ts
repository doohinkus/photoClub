import { PhotoClubPage } from './app.po';

describe('photo-club App', function() {
  let page: PhotoClubPage;

  beforeEach(() => {
    page = new PhotoClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
