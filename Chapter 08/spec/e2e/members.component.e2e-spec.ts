import { browser, element, by } from 'protractor';

describe('Given should test the search feature', () => {

  let searchBox, searchButton, searchResult;

  beforeEach(() => {
    browser.get('');
    element(by.linkText('Members')).click();
    searchButton = element(by.css('form button'));
    searchBox = element(by.css('form input'));
  });

  it('should have an input and search button', () => {
    expect(searchButton.isPresent()).toEqual(true);
    expect(searchButton.isPresent()).toEqual(true);

    searchResult = element.all(by.css('#searchList tbody tr'));
  	expect(searchResult.count()).toBe(3);
  });

  it('There should be one item in search result', () => {
    searchBox.sendKeys('Thomas');
    searchButton.click().then(() => {
      searchResult = element.all(by.css('#searchList tbody tr'));
      expect(searchResult.count()).toBe(1);
    });
  });
});
