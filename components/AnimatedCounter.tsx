'use client';

import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({ amount }:{ amount: number }) {
  return (
    <div>
        <CountUp 
            decimal=","
            prefix="$"
            end={amount}
            decimals={2}
        />
    </div>
  )
}

export default AnimatedCounter