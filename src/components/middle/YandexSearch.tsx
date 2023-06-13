//** This jsx element render searching element. Further input should bring value from useState*/

import { FC } from "react"
import {searchProps} from '../../assets/typesMiddle'

const YandexSearch: FC<searchProps> = (props) => {
  return (
    <>
        <div className="SearchLine">
            <input className="input" type="text"></input>
            <button className="input-btn" onClick={()=> {console.log(123)}}>Найти</button>
        </div>
        <div className="underInput">
          <span>Найдется все. Например, </span>
          <a href="/" className="underInputText">{props.instance}</a>
        </div>        
    </>
  )
}

export default YandexSearch
