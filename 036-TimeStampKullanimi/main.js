const startDate = new Date('08/15/2018 9:45:00')
const now = new Date()
console.log(startDate)

const diff = now.getTime() - startDate.getTime()
console.log(diff)

const min = Math.round(diff/1000)
const hour = Math.round(min/60)
const day = Math.round(hour/24)
const year = Math.round(day/365)

console.log(`Video çekmeye ${min} dakika önce başlandı`)
console.log(`Video çekmeye ${hour} saat önce başlandı`)
console.log(`Video çekmeye ${day} gün önce başlandı`)
console.log(`Video çekmeye ${year} yıl önce başlandı`)

const timeStamp = 1234567890123
console.log(new Date(timeStamp))