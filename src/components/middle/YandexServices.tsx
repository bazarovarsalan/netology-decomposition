
//** this component contains, as follow from his name, services of Yandex*/

import { YandexServicesProps } from "../../assets/typesMiddle"
import { FC } from "react"

const YandexServices: FC<YandexServicesProps> = ({yandexServices}) => {
  return (
    <div className='YandexServices'>
      {yandexServices.map((service) => {
        return <a href={service.ref} className="service" key={service.id}>{service.title}</a>
      })}
    </div>
  )
}

export default YandexServices
