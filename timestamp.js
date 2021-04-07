//Unix format to Human Format

const unixTimestamp = 1617721971

const milliseconds = 1617721971 * 1000 // milliseconds

const dateObject = new Date(milliseconds)

const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15 AAAA-MM-GG HH:MM:SS
console.log(humanDateFormat)


//Human Format to Unix
//Input format: AAAA.MM.GG.HH.MM.SS
console.log(new Date('2021.04.06.17:25:15').getTime() / 1000);
