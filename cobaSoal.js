// reducer berfungsi untuk accumulasi element
uniqueStudents = ["asep","budi","charlie","budi","jeni","asep"];
var student = {};
uniqueStudents.forEach(function(i) { student[i] = (student[i]|| 0) +1;});
console.log(student);

