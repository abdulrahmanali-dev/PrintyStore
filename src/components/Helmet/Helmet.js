import React from 'react'

const Helmet = (props) => {

    document.title = `PRINTY STORE - ${props.title}`
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Helmet
