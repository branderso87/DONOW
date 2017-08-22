function average(array) {
    let add = 0;
    for(let i = 0; i < array.length; i++) {
        add += array[i]
    }
    return (add/array.length)
}

console.log(average([2,4,6]))
