
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:10000, rate: .05, years:10})).toEqual("106.07");
  
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:10000, rate: .05, years:10})).toMatch(/^\d+\.\d\d$/);
});

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:10000, rate: .05, years:10})).toBeInstanceOf(String);
  
});


// it("should return a result with 2 decimal places", function() {
//   expect(calculateMonthlyPayment({amount:10000, rate: .05, years:10})).toBeCloseTo("106.07",2);
// });

// /// etc

