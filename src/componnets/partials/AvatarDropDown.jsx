import { Icon } from '@iconify/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function AvatarDropDown() {
    const isDarkMode = useSelector((state) => state.theme.darkMode);
  
  return (
    <div>
       <div className={`absolute top-20 w-[15vw] rounded-md ${isDarkMode ? "bg-[#080D1E]" : "bg-white"
          }   shadow-md right-10`}>
                    <ul className="p-4">
                      <li className="w-full text-[#6f7f92] font-sans cursor-pointer justify-start items-center flex gap-2 p-2 ">
                        <Icon icon="solar:user-linear" className="text-[20px]" />
                        Profile Info
                      </li>
                      <li className="w-full text-[#6f7f92] font-sans justify-start cursor-pointer items-center flex gap-2 p-2 ">
                        <Icon icon="weui:setting-outlined" className="text-[20px]" />
                        Account Setting
                      </li>
                      <li className="w-full text-[#6f7f92] font-sans cursor-pointer justify-start items-center flex gap-2 p-2 ">
                        <Icon icon="lineicons:gallery" className="text-[20px]" />
                        Change Avatar
                      </li>
                      <li className="w-full text-[#6f7f92] font-sanscursor-pointer justify-start items-center flex gap-2 p-2 ">
                        <Icon icon="weui:setting-outlined" className="text-[20px]" />
                        Profile Setting
                      </li>
                    </ul>
                  </div>
    </div>
  )
}
