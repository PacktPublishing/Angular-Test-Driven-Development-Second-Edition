
var bookBuilder = function() {
    var _resultBook = {
        id: 1,
        author: 'Any Author',
        dateTime: new Date()
    };

    this.build = function() {
        return _resultBook;
    };

    this.setAuthor = function(author) {
        _resultBook.author = author;
        return this;
    };

    this.setDateTime = function(dateTime) {
        _resultBook.dateTime = dateTime;
        return this;
    };
};

var validate = function(builtBookToValidate){
    if(!builtBookToValidate.author) {
        return false;
    }
    if(!builtBookToValidate.dateTime) {
        return false;
    }
    return true;
};

var builtBook = new bookBuilder().setAuthor('Ziaul Haq')
.setDateTime(new Date())
.build();

console.log(builtBook.author); // Ziaul Haq


var validBuilder = new bookBuilder().setAuthor('Ziaul Haq')
.setDateTime(new Date())
.build();

// Validate the object with validate() method
if (validate(validBuilder)) {
    console.log('Valid Book created');
}

var invalidBuilder = new bookBuilder().setAuthor(null).build();

if (!validate(invalidBuilder)) {
    console.log('Invalid Book created as author is null');
}

var invalidBuilder = new bookBuilder().setDateTime(null).build();

if (!validate(invalidBuilder)) {
    console.log('Invalid Book created as dateTime is null');
}
