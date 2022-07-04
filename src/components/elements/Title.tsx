import { FC } from "react";

interface TitlePropsType {
  children: string | React.ReactNode
}

const Title: FC<TitlePropsType> = ({children}) => {
  return (
    <>
      <h1 className="title">{children}</h1>
    </>
  )
}
export default Title;