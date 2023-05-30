const names = ["ali", "ahmet", "mehmet", "mahmut"]
// Küçükten Büyüğe
names.sort()
console.log(names)
// Büyükten Küçüğe
names.reverse()
console.log(names)



const points = [30, 63, 89, 94, 54, 34]

points.sort()
console.log(points)

points.sort((a,b) => b-a)
console.log(points)


const students = [
  {name: 'ahmet', point: 40},
  {name: 'ali', point: 60},
  {name: 'mustafa', point: 30},
  {name: 'bülent', point: 100}
]
students.sort((a,b) => b.point - a.point)
console.log(students)