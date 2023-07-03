import { PropsWithChildren } from "react";

//основной компонент, который включается в себя навигацию и поиск
export const Search: React.FC<PropsWithChildren<{img: string, logo: string}>> = ({img, logo, children}) => (
    <section className='search'>
        <img className="logo" src={logo}/>
        <div>
            <ul className="nav">{children}</ul>
            <form className='search_input'>
                <input type='text'/>
                <button className="btn">Найти</button>
            </form>
            <img className='film_img' src={img}/>
        </div>
        
    </section>
)