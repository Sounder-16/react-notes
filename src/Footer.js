import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer>
        <p>{`${date.getFullYear()}`} CopyRights&copy; React Notes&trade;</p>
    </footer>
  )
}

export default Footer