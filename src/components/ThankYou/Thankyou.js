import React from 'react'
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use'
export default function Thankyou() {
    const { width, height } = useWindowSize()
  return (<>
    <Confetti
      width={width}
      height={height}
    />
    <h1 style={{textAlign:'center'}}>Thank you for shopping!</h1>
    </>
  )
}
