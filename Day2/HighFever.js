const input=[
    {
        name:"Peter  ",
        temp:  98.9 ,
    },
    {
        name:" Ron ",
        temp:  98.5 ,
    },
    {
        name:"Cynthia  ",
        temp: 99.0  ,
    },
    {
        name:"Sherry  ",
        temp: 100  ,
    },
]

input.map((index) => {
    index.temp > 98.5 ? console.log(index.name) : null;
})