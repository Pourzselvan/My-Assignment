let userName = 'Pourzselvan Ponnusamy Murugesan'

console.log(userName.length+ "Total Legnth")

console.log(userName.charAt(5) + " - character in 5th place")

console.log(userName.toLowerCase())

console.log(userName.toUpperCase())

let split = userName.split(" ")
let x = split.length

for (let i = (x-1); i>=0; i--){

    console.log(split[i])
}

let split2 = userName.split("")
let y = split2.length

for (let i= (y-1); i>=0 ; i--){

    console.log(split2[i])
}