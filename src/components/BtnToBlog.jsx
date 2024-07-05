import React from 'react'
import { Link } from 'react-router-dom'

const BtnToBlog = ({id}) => {
  return (
    <Link to={`${id}`}>go to blog</Link>
  )
}

export default BtnToBlog
