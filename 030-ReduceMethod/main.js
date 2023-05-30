const points = [30, 63, 89, 94, 54, 34]

const result = points.reduce((value, point) => {
  if(point > 50) {
    value++;
  }
  return value;
},0)
console.log(result)

const students = [
  {name: 'ahmet', point: 40},
  {name: 'ali', point: 60},
  {name: 'mustafa', point: 30},
  {name: 'bülent', point: 100},
  {name: 'ahmet', point: 50},
  {name: 'ali', point: 30},
  {name: 'mustafa', point: 60},
  {name: 'bülent', point: 10}
]
const aliTotal = students.reduce((value,student)=>{
  if(student.name == 'ali') {
    value+=student.point;
  }
  return value
},0)
console.log(aliTotal)