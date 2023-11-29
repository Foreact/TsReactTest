import { useEffect, useState } from 'react'

interface UserElement {
  name: string,
  gender?: 'male' | 'female',
  city?: string
}

export const App = () => {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<UserElement[]>([])
  const [valid, setValid] = useState<boolean>(false)

  // When count change, create a new user
  useEffect(() => {
    if (users.length !== count) {
      const newUser: UserElement = {
        name: `User ${count}`,
        gender: (count % 2) ? 'male' : 'female',
        // Add this line for the "Show people living in Paris" feature
        city: (count % 2) ? 'Toulouse' : 'Paris'
      }
      setUsers([...users, newUser])
    }
  }, [count, users])

  useEffect(() => {
    //Count the number of male users
    let numberOfMale = 0
    for (let i = 0; i < users.length; i = i + 1) {
      const user = users[i]
      const userGender = user.gender

      if (userGender === 'male') {
        numberOfMale = numberOfMale + 1;
      }
    }
    console.log('Male users count:', numberOfMale)

    //Show people living in Paris
    for (let i = 0; i < users.length; ++i) {
      const myCallback = () => {
        if (users[i].city === "Paris") {
          console.log('Paris people:', users[i])
        }
      }
      window.setTimeout(myCallback, 100)
    }
  }, [users])

  return (
    <>
      <h2>Typescript and React test</h2>
      <div className="card">
        {/* Button to add new user */}
        <button onClick={() => setCount((count) => count + 1)}>
          user count is {count}
        </button>
        {/* If valid is false, show the valid button */}
        {valid === false &&
          <button onClick={() => setValid(true)}>
            {valid ? 'Valid' : 'Not valid'}
          </button>
        }
      </div>

      {/* Show the list of users */}
      <div className='flex flex-col'>
        {users.map((elem, index) => <div key={index}>{elem.name}</div>)}
      </div>

      {/* Show the name of the last user */}
      { users.length > 0 ? (
        <div>
          <span> Last user in list</span>
          <span>{users[users.length - 1].name}</span>
        </div>
      ) : null }
    </>
  )
}