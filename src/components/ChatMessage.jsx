import React from 'react'

const ChatMessage = ({name , message }) => {
  return (
    <div className='flex items-center shadow-lg p-2 mb-2'>
       <img
        className="w-6 h-6"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        alt="avatar"
      />
      <span className='font-semibold mx-2'>{name}</span>
      <span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage