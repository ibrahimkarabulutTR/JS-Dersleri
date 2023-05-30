const students = [
  {name: 'ahmet', point: 40},
  {name: 'ali', point: 60},
  {name: 'mustafa', point: 30},
  {name: 'bülent', point: 100}
]
// const leftStudents = students.filter(student => {
//   if(student.point <= 50) return student.point+=15;
// })
// console.log(leftStudents)

// // 50 nin üstüne çıkana kadar 15 puan ekler
// const newStudents = students.map(student => {
//   if(student.point <= 50) {
//     student.point+=15;
//   }
//   return student
// })
// console.log(newStudents)


const left = students.filter(student => student.point < 50)
console.log(left)
const news = left.map(student => student.point+=15)
console.log(news)


const ultraLeft = students.filter(student => student.point < 50).map(student => student.point+=15)
console.log(news)