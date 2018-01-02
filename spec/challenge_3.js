//need some code here :p
describe("Random test cases", function() {
  assertEquals(calculateAge(2012, 2016),"You are 4 years old.");
  assertEquals(calculateAge(1989, 2016),"You are 27 years old.");
  assertEquals(calculateAge(2000, 2090),"You are 90 years old.");
  assertEquals(calculateAge(2000, 1990),"You will be born in 10 years.");
  assertEquals(calculateAge(3400, 3400),"You were born this very year!");
  assertEquals(calculateAge(900, 2900),"You are 2000 years old.");
  assertEquals(calculateAge(2010, 1990),"You will be born in 20 years.");
  assertEquals(calculateAge(2010, 1500),"You will be born in 510 years.");
  assertEquals(calculateAge(2011, 2012),"You are 1 year old.");
  assertEquals(calculateAge(2000, 1999),"You will be born in 1 year.");
})
