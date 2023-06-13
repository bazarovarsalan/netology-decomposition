/** This elenement responsible for render of top part of page
 * As you can see top part of this page include diffrenet component 
 * such as Heading,News, Exchange, TopRightContent
 */


import Heading from "./Heading"
import News from "./News"
import Exchange from "./Exchange"
import TopRightContent from "./TopRightContent"
import { IHeadingContent, IToday, INews, IExchangeValues, ITopRight } from "../../assets/typesTop"
import '../../App.css'

const Top = () => {
    const headingContent: IHeadingContent[] = [{id: 1, title:'Сейчас в СМИ'}, {id: 2, title: 'В Германии'}, {id:3, title:'Рекомендуем'}];
    const today: IToday = {id: 4, todayNow: getDate()};
    function getDate (): string {
        const now = new Date().toLocaleString('ru', {
            day: 'numeric',
            month: 'long',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric'
          });
          const nowArray = now.split(' ');
          const res = [nowArray[1], nowArray[2] + ',', nowArray[0].slice(0,-1), nowArray[4]]
          return res.join(' ')
    }

        
    const news: INews[] = [{id: 5, image: '/public/images/img-ria-news.jpeg', topic: 'Суд в США отказал СМИ в съемке процесса над Трампом'}, 
        {id: 6, image: '/public/images/img-ria-news.jpeg', topic: 'Счетная палата назвала крупнейших плательщиков дивидендов в бюджет'}, 
        {id: 7, image: '/public/images/img-ria-news.jpeg', topic: 'Фильм "Переводчик" возглавил прокат в России и СНГ за выходные'}, 
        {id: 8, image: '/public/images/img-rg-news.jpeg', topic: 'В Италии скончался Сильвио Берлускони'}, 
        {id: 9, image: '/public/images/img-rg-news.jpeg', topic: '"Вредные" продукты, без которых сложно сохранить здоровье'}, 
    ]
    
    const exchangeValues: IExchangeValues[] = [{id:10, title: 'USD MOEX', value: '82.41', changeValue: '+4.2'},
    {id:11, title: 'EUR MOEX', value: '88.84', changeValue: '+1.1'},
    {id:12, title: 'НЕФТЬ', value: '74.54', changeValue: '+0.47'}
    
    ]
    
    const topRightContent:ITopRight = {id: 13, image:'/public/images/img-top-right.jpeg', title: 'Работа над ошибками', description: 'Смотрите на Яндексе'}


    
    
  return (
         <div className="topContentContainer">
            <div className='topContentLeft'>
                <Heading headingContent={headingContent} today={today}/>
                <News news={news}/>
                <Exchange exchangeValues={exchangeValues}/>
            </div>
                <TopRightContent {...topRightContent}/>
        </div>
  )
}

export default Top
