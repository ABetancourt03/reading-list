import { useState } from 'react'

export default function Header () {
  return (
    <>
      <header className='flex w-screen items-center h-20 justify-between bg-[#DEDEDE] p-10'>
        <h2 className='text-2xl'>📚 Reading List</h2>
      </header>
    </>
  )
}