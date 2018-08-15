function codilityTestCoders(number) {
  let print = "";
  for (i = 1; i <= 24; i++) {
    if (i % 2 === 0) {
      print += "codility";
    }
    if (i % 3 === 0) {
      print += "test";
    }
    if (i % 5 === 0) {
      print += "coders";
    }
    if (!print) {
      print = i;
    }
    console.log(print);
    print = "";
  }
}
codilityTestCoders(24);
