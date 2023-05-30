/*const points = [70, 76, 65, 82, 39, 87, 99]
const studentsPassed = points.filter(points => {
  return points > 70
})
console.log(studentsPassed)*/

const students = [
  {name: 'ahmet', passed: true},
  {name: 'ali', passed: false},
  {name: 'mustafa', passed: true},
  {name: 'bülent', passed: false}
]
const passedStudents = students.filter(student => student.passed )
const leftStudents = students.filter(student => !student.passed )
console.log(passedStudents)