//need some code here :p
describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  it("Should return something that isn't falsy", function() {
    expect(results1, "Something is wrong, no results!");
  });
  it("Should return \"11\"", function() {
    assertEquals(results1, "11");
  });
});
