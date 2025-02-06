import React from 'react'
import Chats from './Chats'
import ChatPage from './chatPage'
import { useSelector } from 'react-redux';

export default function index() {
  const isOpen = useSelector((state) => state.chats.isOpen);
  return (
    <div className='flex  mt-10  p-2 h-fit mb-10'>
      <div className={` ${isOpen ? "lg:hidden block" : 'lg:w-[40%] w-full  lg:flex hidden '}   `}>
      <Chats/>
      </div>
<div className={` ${isOpen ? 'w-full ' : 'lg:w-[60%] w-full'}`}>
  <ChatPage/>
</div>
    </div>
  )
}
