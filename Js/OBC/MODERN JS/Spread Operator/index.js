const family = ['Luan', 'Kauan','José','Maria' ,'Luiza', 'Leonardo']
console.log(...family)
console.log(...family[0])

const familyCopy = family 
familyCopy.pop()
familyCopy.pop()
console.log({family,familyCopy})

const familyClone = [...family]
familyClone.push('Kaique')
familyClone.push('Kamila')
console.log({family,familyCopy,familyClone})


const familyObject = {...family}
console.log(familyObject)
const familyObjectClone = {...familyObject}
familyObjectClone.test = 'Test'
console.log(familyObjectClone)

