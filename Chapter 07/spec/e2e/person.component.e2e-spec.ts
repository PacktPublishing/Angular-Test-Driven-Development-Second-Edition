import { browser, element, by } from 'protractor';

describe('Given should test the search result in details view', () => {

  beforeEach(() => {
    browser.get('members');
    let searchButton = element(by.css('form button'));
    let searchBox = element(by.css('form input'));
    searchBox.sendKeys('Thomas');
    searchButton.click();
    let resultItem = element(by.linkText('Demaryius Thomas'));
    resultItem.click();
  });

  it('should be load the person details page', () => {
    var resultDetail = element(by.css('#personDetails'))
    expect(resultDetail.isDisplayed()).toBeTruthy();
  });

});
