// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

export function organizePricesByKey(arr) {

    // let obj = {}

    // arr.forEach(item => {
    //     // let id = item.id;
    //     // let price = item.price;
    //     obj[item.id] = item.price;
    // });

    // return obj;

    return arr.reduce((acc, current) => {
        return {
            ...acc,
            [current.id]: current.price
        }
    }, {})

}


/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {

    return arr.reduce((acc, current) => {
        // console.table(JSON.stringify(acc));
        // console.table(acc)
        acc[current.id] = current;
        return acc;
    }, {})

    // return arr.reduce((acc, current) => {
    //     return {
    //         ...acc,
    //         [current.id]: current
    //     }
    // }, {})


    // const newObj = {}
    // arr.forEach((item) => {
    //     newObj[item.id] = item;
    // });
    // return newObj;
}


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {

    // return arr.reduce((acc, current) => {
    //     return {
    //         ...acc,
    //         [current.category]: (acc[current.category] || 0) + 1
    //     }
    // }, {})

    return arr.reduce((acc, current) => {
        acc[current.category] = (acc[current.category] || 0) + 1;
        return acc;
    }, {})

    // readable version:
    // return arr.reduce((acc, current) => {
    //     if (!acc[current.category]) acc[current.category] = 1; 
    //     else acc[current.category] = acc[current.category] + 1;
    //     return acc;
    // }, {});

}