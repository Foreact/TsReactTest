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

  const myCallback = useCallback(() => {
    for (let i = 0; i < users.length; ++i) {
      if (users[i].city === "Paris") {
        console.log('Paris people:', users[i])
      }
    }
  }, [users]);

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
    //     numberOfMale++;
    //   }
    // }
    // console.log('Male users count:', numberOfMale)

    /*
      It's the same thing here, but because I added the 'city' when adding a new user, this feature is used.
    */
    /*
      The timeout here is not normally necessary in this case,
      but if it was necessary for synchronization reasons,
      then I would have done it like this to check the list of users living in Paris
      Otherwise, I'll do something like this:
        myCallback()
    */
    //Show people living in Paris
    if (users.length > 0) {
      window.setTimeout(myCallback, 100)
    }
  
  /*
    The fact that this useEffect had no dependencies confuses me because, depending on the functionality,
    you might want to know the number of males in the list each time you change it.
    Personally, I think you want to know the number of males each time you change the number of users.
  */
  }, [myCallback, users])

  return {
    users,
    count,
    addUser
  }
}