const points = [30, 63, 89, 94, 54, 34]
const arrayIndex = points.findIndex(point => point == 30)
points[arrayIndex] = 45
console.log(points)

const students = [
  {name: 'ahmet', point: 40},
  {name: 'ali', point: 60},
  {name: 'mustafa', point: 30},
  {name: 'bülent', point: 100}
]
const objectIndex = students.findIndex(student => student.name == 'bülent')
studenst[objectIndex].name = 'mehmet'
console.log(students)