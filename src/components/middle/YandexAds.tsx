import { YandexAdsProps } from "../../assets/typesMiddle"
import { FC } from "react"


const YandexAds: FC<YandexAdsProps> = ({ads}) => {
  return (
        <div className='ads' key={ads.id}>
            <a href={ads.img}>
                <img
                src={ads.img}
                alt=''
                className="adsBanner"
                />
            </a>
        </div>
  )
}

export default YandexAds
