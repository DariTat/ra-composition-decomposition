import { PropsWithChildren } from "react"

// компонент собирающий все компоненты 
export const Page = ({children}: PropsWithChildren) => (
    <div className="main">{children}</div>
)