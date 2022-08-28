function getRepeatedInfo(number) {
  var numberToString = number.toString();

  document.write(typeof numberToString);

  var newNum = numberToString.split("");

  const res = newNum.reduce(
    (acc, curr) => ((acc[curr] = curr.repeat(curr)), acc),{});
  console.log(res);
}
getRepeatedInfo(1287);
