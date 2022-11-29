//Current date 
var dt = new Date()
console.log(dt)
//Specific date object
//YYYY,MM,DD,HH,mm,SS,MS
var sdt = new Date(2025,3,1,21)
console.log(sdt)
console.log(dt.getDate())
console.log(dt.getFullYear())
console.log(dt.getMonth())
console.log(dt.getHours())
console.log(dt.setDate(5))
console.log(dt)
console.log(dt.getTime()) // converts to date to milliseconds
console.log(dt.toISOString())
console.log(dt.toLocaleString())
console.log(dt.toLocaleDateString())

//moment.js date-fns.js