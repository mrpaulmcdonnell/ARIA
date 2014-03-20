describe ("My Converter", function() {
    it("should convert imperial weight to metric", function() {
        expect (Converter.convertFromImperialToMetric(2.2)).toBe(1);

    })
	
	it("should convert imperial weight to metric", function() {
        expect (Converter.convertFromImperialToMetric(2.6)).toBe(1);

    })
	
    it("should be able to deal with strings", function() {

        expect (function() {Converter.convertFromImperialToMetric("hello")}).toThrow(new Error("Not a number"));
    })
	
	it("5+6 is 11", function() {
        expect (Converter.AddTwoNumbers(5,6)).toBe(11);

    })
	
	it("7+5 is 12", function() {
        expect (Converter.AddTwoNumbers(7,5)).toBe(12);

    })
	
	 it("7 + string should be an error", function() {

        expect (function() {Converter.AddTwoNumbers(7,"xyz")}).toThrow(new Error("Not a number"));
    })
	
	 it("string + 5 should be an error", function() {

        expect (function() {Converter.AddTwoNumbers("xyz", 5)}).toThrow(new Error("Not a number"));
    })
	
	 it("string + string should be an error", function() {

        expect (function() {Converter.AddTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })
	
	
})
