import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function Notfound() {
  let navigate = useNavigate()
  const backToHome = () => {
    navigate('/')
  }
  return (
    <div>
      <h3>404Notfound</h3>
      <Button className='btn btn-primary' onClick={backToHome}>Back to home</Button>
    </div>
  )
}

export default Notfound