/** This elenement responsible for render of middle part of page */

import YandexServices from "./YandexServices"
import YandexSearch from "./YandexSearch"
import YandexAds from "./YandexAds"
import { IYandexServices, IAds } from "../../assets/typesMiddle"


const Middle = () => {
    const yandexServices: IYandexServices[] = [{id: 14, ref:'#', title:'Видео'},
                            {id: 16, ref:'#', title:'Новости'},
                            {id: 17, ref:'#', title:'Карты'},
                            {id: 18, ref:'#', title:'Маркет'},
                            {id: 19, ref:'#', title:'Переводчик'},
                            {id: 21, ref:'#', title:'Эфир'},
                            {id: 22, ref:'#', title:'еще'}]

    const searchingQueryInstance = 'фазы луны сегодня'

const ads: IAds = {id: 23, img:'/public/images/avengers.jpeg'}
  return (
    <div className="MiddleContentContainer">
      <YandexServices yandexServices={yandexServices}/>
      <YandexSearch instance={searchingQueryInstance}/>
      <YandexAds ads={ads}/>
    </div>
  )
}

export default Middle
