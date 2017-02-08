describe('Given I am posting a new comment', () => {
    describe('When I push the submit button', () => {
        beforeEach(() => {
            //Assemble
            browser.get('/');
            var commentInput = element(by.css('input'));
            commentInput.sendKeys('a sample comment');
            //Act
            var submitButton = element(by.buttonText('Submit')).click();
        });

        //Assert
        it('Should then add the comment', () => {
            var comment = element.all(by.css('li')).first();
            expect(comment.getText()).toBe('a sample comment like 0');
        });
    });

    describe('When I like a comment', () => {
        var firstComment = null;

        beforeEach(() => {
            browser.get('/');

            //Assemble
            firstComment = element.all(by.css('li')).first();
            var likeButton = firstComment.element(by.buttonText('like'));

            //Act
            likeButton.click();
        });

        //Assert
        it('Should increase the number of likes to one', () => {
            var commentLikes = firstComment.element(by.binding('likes'));
            expect(commentLikes.getText()).toBe(1);
        });
    });
});
