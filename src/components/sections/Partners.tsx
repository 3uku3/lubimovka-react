import { FC } from "react";

interface PartnersPropsType {
  title: string;
  children: React.ReactNode
}

const Partners: FC<PartnersPropsType> = ({title, children}) => {
  return (
    <section className="partners">
      <h2 className="partners__title">{title}</h2>
      <div className="partners__items">
        {children}
      </div>
    </section>
  )
}
export default Partners;