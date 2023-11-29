import { useState } from 'react'
import { useUsers } from './hooks/useUsers';
import { UserList } from './components/UserList';
import { AddUserButton } from './components/AddUserButton';
import { LastUser } from './components/LastUser';

export const App = () => {
  const [isValid, setIsValid] = useState<boolean>(false)
  const { users, count, addUser } = useUsers();

  return (
    <>
      <h2>Typescript and React test</h2>
      <div className="card">
        {/* Button to add new user */}
        <AddUserButton count={count} addUser={addUser} />

        {/* If valid is false, show the valid button */}
        {isValid === false &&
          <button onClick={() => setIsValid(() => true)}>
            {/* Don't need to check isValid value because the 'Valid' text will never appear */}
            {/* {isValid ? 'Valid' : 'Not valid'} */}
            Not valid
          </button>
        }
      </div>

      {/* Show the list of users */}
      <UserList users={users} />

      {/* Show the name of the last user */}
      <LastUser lastUser={users[users.length - 1]} />
    </>
  )
}