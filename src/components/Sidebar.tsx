import React, { PropsWithChildren } from "react";

// компонент для отображения побочной информации, такой как рекламы 
export const Sidebar:React.FC<PropsWithChildren<{ img: string, title: string, }>> = ({img, title, children}) => (
    <section className="sidebar">
        <img src={img}/>
        <h3>{title}</h3>
        <p>{children}</p>
    </section>
    
)