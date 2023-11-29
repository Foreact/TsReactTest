import { useCallback, useEffect, useState } from "react"
import { UserElement } from "../type"

export const useUsers = () => {
  const [users, setUsers] = useState<UserElement[]>([])

  // Don't use useState every time, especially if you don't need to, as this will redraw the component and its children.
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   if (users.length !== count) {
  //     const newUser: UserElement = {
  //       name: `User ${count}`,
  //       gender: (count % 2) ? 'male' : 'female',
  //     }
  //     setUsers([...users, newUser])
  //   }
  // }, [count, users])

  // Replace by
  const count = users.length;

  const addUser = useCallback(() => {
    const nextUserId = count + 1;
      const newUser: UserElement = {
        name: `User ${nextUserId}`,
        gender: (nextUserId % 2) ? 'male' : 'female',
        // Add this line for the "Show people living in Paris" feature
        city: (count % 2) ? 'Toulouse' : 'Paris'
      }
      setUsers([...users, newUser])
  }, [count, users]);

  useEffect(() => {

    /*
      It should be deleted because numberOfMale is not used and is therefore unnecessary
    */
    //Count the number of male users
    // let numberOfMale = 0
    // for (let i = 0; i < users.length; ++i) {
    //   const user = users[i]
    //   const userGender = user.gender

    //   if (userGender === 'male') {
    //     numberOfMale = numberOfMale + 1
    //   }
    // }
    // console.log('Male users count:', numberOfMale)

    /*
      It's the same thing here, but because I added the 'city' when adding a new user, this feature is used.
    */
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

  return {
    users,
    count,
    addUser
  }
}