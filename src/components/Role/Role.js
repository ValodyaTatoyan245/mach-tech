import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slice/UsersSlice/UsersSlice'

function Role() {
    const {users} = useSelector(selectUsers)
  return (
    <div>
        {
            users.map(user =>(
                <div key={user.id}>
                    <span>{user.firstName}</span>
                    <span>{user.lastName}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Role