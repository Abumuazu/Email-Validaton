let input = "Pig latin is cool"
const test = (input) => {
    let arr = input.split(" ")
  let result =  arr.map(val => {
      val.toLowerCase()
    if (val == /[A-Za-z]/ ){
        console.log(val.charAt(0))
        let first = val.charAt(0)
        let cutFirst = val.slice(1)
        console.log(cutFirst)
        return cutFirst + first + "ay"
    }

    })
    return result.join(" ")
}
console.log(test(input))