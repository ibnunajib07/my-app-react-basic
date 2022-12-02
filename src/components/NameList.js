import React from 'react'
import Person from './Person'

function NameList(){
    const names = ['Kuda','Sapi','Babi']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Kuda',
    //         age: 15,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Sapi',
    //         age: 25,
    //         skill: 'Mooo'
    //     },
    //     {
    //         id: 3,
    //         name: 'Babi',
    //         age: 20,
    //         skill: 'Oink'
    //     }
    // ]
    //const personList = persons.map(person => <Person key={person.name} person = {person} />)
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList

// function NameList() {
//         const names = ['Kuda','Sapi','Babi']
//         const nameList = names.map(name => <h2>{name}</h2>)
//         return (
//     <div>{nameList}
//         {/* <h2>{names[0]}</h2>
//         <h2>{names[1]}</h2>
//         <h2>{names[2]}</h2> */}
//     </div>
//   )
// }