import { PropsWithChildren } from "react"

//компонент, которым удобно создавать блоки с доп информацией 
export const Widget: React.FC<PropsWithChildren<{title: string}>> = ({title, children}) => (
    <section className="widget">
        <h3>{title}</h3>
        <div>
            {children}
        </div>
    </section>
)
