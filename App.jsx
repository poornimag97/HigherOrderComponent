import React from 'react'
import Hoc from './Hoc'

const App = (props) => {
console.log(props);
  return (
    <div>{props.data}</div>
  )
}

export default Hoc(App)