var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 50, 99, 100, 10, 11, 9, 62, 84, 71, 94, 87];
console.log(scores);
var ordered = scores.sort((y,x)=>{
  return x-y;
});
console.log(ordered);

for (var i = 0; i < ordered.length; i++) {
  var lowestGrade = ordered.slice(-1).pop()
  console.log(lowestGrade);

  var highestGrade = ordered.slice().shift()
  console.log(highestGrade);

  if (ordered[i] >= 0 && ordered[i] < 50) {
    ordered[i] = "What the fuck were you doing?";
  } else if (ordered[i] >= 0 && ordered[i] < 60) {
    ordered[i] = "F";
  } else if (ordered[i] >= 60 && ordered[i] < 70) {
    ordered[i] = "D";
  } else if (ordered[i] >= 70 && ordered[i] < 80) {
    ordered[i] = "C";
  } else if (ordered[i] >= 80 && ordered[i] < 90) {
    ordered[i] = "B";
  } else {
    ordered[i] = "A";
  }
  console.log(ordered[i]);
}
