import { PropsWithChildren } from "react"

// компонент для отображения раздела с новостями 

export const Header: React.FC<PropsWithChildren<{title1: string, title2: string, title3: string, data:string}>> = ({title1, title2, title3, data, children}) => (
    <section className="header"> 
        <ul className='link'>
            <li><a>{title1}</a></li>
            <li><a>{title2}</a></li>
            <li><a>{title3}</a></li>
            <li>{data}</li>
        </ul>
        <ul className="news">{children}</ul>
    </section>
)