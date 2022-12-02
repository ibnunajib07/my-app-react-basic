import React from 'react'

const Hello = () => {
    // return (
    // <div className='dummyClass'>
    //     <h1>
    //         Hello Najeeeb //with JSX
    //     </h1>
    // </div>
    // )

    return React.createElement('div', 
    {id: 'helo', className: 'dummyClass'},  
    React.createElement('h1', null, 'Hello Najib'))
}

export default Hello