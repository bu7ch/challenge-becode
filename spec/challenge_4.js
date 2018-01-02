//need some code here :p
describe("calculator tests", function () {
  assertEquals(calculator(1,2,"+"), 3, "calculate");
  assertEquals(calculator(1,2,"-"), -1, "calculate");
  assertEquals(calculator(3,5,"*"), 15, "calculate");
  assertEquals(calculator(6,2,"/"), 3, "calculate");
  assertEquals(calculator(6,2,"$"), "unknown value", "calculate");
  assertEquals(calculator(6,"h","*"), "unknown value", "calculate");
});
