import React from 'react'
import { Button } from './button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img className='w-12' src='/logo.png'/>
        <div>
            <Button>Sing In</Button>
        </div>

    </div>
  )
}

export default Header