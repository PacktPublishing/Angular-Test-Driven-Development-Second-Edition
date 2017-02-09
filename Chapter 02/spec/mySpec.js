
describe("A sample test suite to test jasmine assertion", function() {
    var fetchA;
    beforeEach(function() {
        spyOn(myObj, "getA").and.returnValue(789);
        myObj.setA(123);
        fetchA = myObj.getA();
    });

    it("tracks that the spy was called", function() {
         expect(myObj.getA).toHaveBeenCalled();
    });

		it("should not affect other functions", function() {
        expect(a).toEqual(123);
    });

		it("when called returns the requested value", function() {
        expect(fetchA).toEqual(789);
    });
});
