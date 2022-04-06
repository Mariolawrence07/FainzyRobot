import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function ContainerSection(props) {
  const {whiteNavbar} = props;
  return (
    <>
        <Navbar whiteNavbar={whiteNavbar}/>
            {props.children}
        <Footer/>
    </>
  )
}
