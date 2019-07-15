function getNumbers(string) {
    let str = string.split(''),
        array = [];
    str.forEach(function(elem) {
        let number = Number(elem);
        if (isFinite(number)) {
            array.push(number);
        }
    })
    return array;
}
console.log(getNumbers('n1um3ber95'));


function findTypes() {
    let object = {};
    for (let i = 0; i < arguments.length; i++) {
        switch (false) {
            case typeof arguments[i] in object:
                object[typeof arguments[i]] = 1;
                break
            default:
                object[typeof arguments[i]]++
        }
    }
    return object;
}
console.log(findTypes(null, 5, "hell"));


function executeforEach(arr, back) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = back(arr[i])
    }
    return arr;
}
executeforEach([1, 2, 3], function(el) {
    console.log(el)
})


function mapArray(arr, back) {
    let array = arr;
    array = executeforEach(arr, back)
    return array;
}
mapArray([2, 5, 8], function(el) {
    return el + 3
})
console.log(mapArray([2, 5, 8], function(el) {
    return el + 3
}))


function filterArray(arr, back) {
    let array = [];
    executeforEach(arr, function(arg) {
        if (back(arg)) {
            array.push(arg);
        }
    });
    return array;
}
console.log(filterArray([2, 5, 8], function(el) {
    return el > 3
}))

filterArray([2, 5, 8], function(el) {
    return el > 3
})


showFormattedDate(new Date('2019-01-27T01:10:00'))

function showFormattedDate(date) {
    let formatData = date.toDateString().split(' ').slice(1).join(' ')
    formatData.getDay
    return `Date: ${formatData}`
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')))


function canConvertToDate(date) {
    if (isFinite(Date.parse(date))) {
        return true
    } else {
        return false
    }
}
console.log(canConvertToDate('2016-13-18T00:00:00'))


function daysBetween(day1, day2) {
    let days = Math.round((Date.parse(day2) - Date.parse(day1)) / (1000 * 60 * 60 * 24))
    return days;
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));


function getAmountOfAdultPeople(man) {
    const date = new Date();
    let years = [];
    for (let i = 0; i < man.length; i++) {
        let now = daysBetween(man[i][" birthday "], date) / 365;
        if (now > 18) {
            years.push(now)
        }
    }
    return years.length;
}

let data = [{
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        " birthday ": '2016-03-18T00:00:00',
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        " birthday ": '1991-02-11T00:00:00',
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        " birthday ": '1984-04-17T00:00:00',
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        " birthday ": '1994-04-17T00:00:00',
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]
console.log(getAmountOfAdultPeople(data));


function keys(value) {
    let arr = []
    for (let key in value) {
        arr.push(key)
    }
    return arr;
}
console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));


function values(object) {
    let array = []
    for (let keys in object) {
        array.push(object[keys])
    }
    return array;
}
console.log(values({ keyOne: 1, keyTwo: 2, keyThree: 3 }));