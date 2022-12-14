import React from 'react'

function Columns() {
    const items = []
  return (
    //cannot pass key attributes
    <> 
        {
            items.map(item => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        <td>Name</td>
        <td>Najeeeb</td>
    </>
  )
}

export default Columns