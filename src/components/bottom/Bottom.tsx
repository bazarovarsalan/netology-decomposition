/** This elenement responsible for render of bottom part of page */
import BottomBlocks from "./BottomBlocks"
import { IBottomBlocks } from "../../assets/typesBottom"

const bottomContent: IBottomBlocks[]= [{id:24, title: 'Погода', img:'/public/images/weather.png', sections: ['Утром +17', 'Вечером +13']},
{id: 25, title: 'Телепрограмма', sections: ['02:00 ТНТ.Best', '02:15 Джинглики', '2:25 Наедине со всеми']},
{id: 26, title: 'ЭФИР', sections: ['Искусство', 'Ночь. Мир в это время']},
{id: 27, title: 'Карта Германии', sections: 'Расписания'}
]



const Bottom = () => {
  return (
    <div className="BottomContentContainer">
      <BottomBlocks content={bottomContent}/>
    </div>
  )
}

export default Bottom
