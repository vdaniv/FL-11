let addOne = n => n

function pipe(number) {
    return (addOne(number) +
        arguments.length)
}

pipe(1, addOne(), addOne())