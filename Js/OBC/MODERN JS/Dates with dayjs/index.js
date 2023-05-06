const dayJs = require('dayjs')



function myBirthday(birthday){
const date1 = dayJs(birthday)
const date2 = dayJs()

const years = date2.diff(date1,'year')
const nextBirthday = date1.add(years+1,'year')
const diffDays = nextBirthday.diff(date2,'day') + 1

console.log(`You have ${years} years old
you next birthday is in ${nextBirthday.format('DD/MM/YYYY')},
and missing ${diffDays} days for your next birthday.
`) 
}

myBirthday('2000-02-03');

