import React from 'react'

function Footer() {
  const footerstyle = {
    position : "relative",
    top : "10vh",
    width : "100%"
  }
  return (
    <footer className='bg-dark text-light py-3 my-3'style = {footerstyle}>
      <p className='text-center'>
      Copyright &copy ; MyTodosList.com
       </p>
    </footer>
  )
}

export default Footer
