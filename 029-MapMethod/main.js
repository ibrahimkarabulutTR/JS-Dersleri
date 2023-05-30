/*const points = [70, 75, 83,25, 64, 47, 84]
const newPoints = points.map( point => {
  return point +10
})
console.log(newPoints)*/

const students = [
  {name: 'ahmet', point: 40},
  {name: 'ali', point: 60},
  {name: 'mustafa', point: 30},
  {name: 'bülent', point: 100}
]
/*const leftStudents = students.map( student => {
  if(student.point < 50) return student.point +15
  else return student.point
})*/
const leftStudents = students.map( student => {
  if(student.point < 50) {
    student.point += 15;
    return student
  }
  else return student
})
console.log(`${leftStudents.name} -> ${leftStudents.point}`)