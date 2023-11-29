import { UserElement } from "../type"

type PropType =  {
  lastUser: UserElement | undefined
}

/* Show the list of users */
export const LastUser = (props: PropType) => {
  const { lastUser } = props;

  return (
    <>
      { lastUser ? (
        <div>
          <span> Last user in list: </span>
          <span>{lastUser.name}</span>
        </div>
      ) : null}
    </>
  )
}