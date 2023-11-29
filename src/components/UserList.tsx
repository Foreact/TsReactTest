import { UserElement } from "../type"

type PropType =  {
  users: UserElement[]
}

/* Show the list of users */
export const UserList = (props: PropType) => {
  return (
    <div className='flex flex-col'>
        {props.users.map((elem, index) => <div key={index}>{elem.name}</div>)}
    </div>
  )
}