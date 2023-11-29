
type PropType =  {
  count: number;
  addUser: () => void
}

/* Show the list of users */
export const AddUserButton = (props: PropType) => {
  const { addUser, count } = props;

  return (
    <button onClick={addUser}>
        user count is {count}
    </button>
  )
}