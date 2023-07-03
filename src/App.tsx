import { Page } from './components/Page'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Widget } from './components/Widget'
import { Sidebar } from './components/Sidebar'

import './App.css'

function App() {
  

  return (
    <>
     <Page>
        <Header title1='Сейчас в СМИ' title2='в Германии' title3='Рекомендуем' data="31 июля среда 02 32">
          <li>Путин упростил получение автомобильных номеров</li>
          <li>"Турпомощь" прокомментировала гибель десятков россиян в Анталье</li>
          <li>Суд закрыл дело Демпартии США против России</li>
        </Header>
        <Sidebar title="Работа над ошибками" img=''>
          <p>Смотрите на Яндексе и запоминайте</p>
        </Sidebar>
        <Search logo="./img/Yandex_official_logo.svg.png" img='' >
          <li><a>Видео</a></li>
          <li><a>Картинки</a></li>
          <li><a>Новости</a></li>
          <li><a>Ещё</a></li>
        </Search>
        <Widget title='Погода'>
          <img/>
          <p>+17</p>
          <p>Утром +17, днем +20</p>
        </Widget>
        <Widget title='Карта Германии'>
          <p>Расписания</p>
        </Widget>
        <Widget title="Эфир">
          <ul>
            <li>Управление как искусство <span>Успех</span></li>
            <li>Ночь. Мир в это время <span>earthTV</span></li>
            <li>Андрей Возн... <span>Совершенно секретно</span></li>
          </ul>
        </Widget>
        <Widget title='Посещаемое'>
          <p><a>Недвижимость</a> - о сталинках</p>
          <p><a>Маркет</a> - люстры и светильники</p>
          <p><a>Авто.ру</a> - привод 4х4 до 500 000</p>
        </Widget>
        <Widget title="Телепрограмма">
          <ul>
            <li>02:20 THT.Best <a>THT International</a></li>
            <li>02:15 Джинглики <a>Карусель INT</a></li>
            <li>02:25 Наедине со всеми <a>Первый</a></li>
          </ul>
        </Widget>
     </Page>
    </>
  )
}

export default App
