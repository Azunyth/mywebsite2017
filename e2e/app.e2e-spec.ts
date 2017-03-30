import { Mywebsite2017Page } from './app.po';

describe('mywebsite2017 App', () => {
  let page: Mywebsite2017Page;

  beforeEach(() => {
    page = new Mywebsite2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
