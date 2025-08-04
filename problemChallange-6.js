/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary = startingSalary; 
for (var i = 0; i < experience; i++) {
  var raise = currentSalary * 0.05; // raise 5% 
  currentSalary = currentSalary + raise; 
}
var formattedSalary = currentSalary.toFixed(2);   //up to 2 decimal
console.log(formattedSalary);
