import { FC } from "react";

interface TitlePropsType {
  children: string | React.ReactNode;
  className?: string;
}

const Title: FC<TitlePropsType> = ({ children, ...props }) => {
  return <h1 className={`title ${props.className}`}>{children}</h1>;
};
export default Title;
