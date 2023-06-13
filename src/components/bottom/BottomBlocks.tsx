
//** This component responsible for render bottom section of page. BottomBlock takes as props array of content and display each element through map method */

import { FC } from "react"
import { BottomBlockProps } from "../../assets/typesBottom"

const BottomBlocks: FC<BottomBlockProps> = ({content}) => {
  return (
    <>
    {content.map((item) => {
      return (
        <div className="item-bottom" key={item.id}>
          <div className="item-bottom-content">
            <h1 className="item-bottom-h1">{item.title} </h1>
            {item.img && <a href={item.img} >
                  <img className="imgWeather"
                  src={item.img}
                  alt={item.title}
                  />
              </a>}
              {Array.isArray(item.sections) ? 
              item.sections.map((sec) => {
                return <p className='i-bottom-li' key={sec.length * Math.random()}>{sec}</p>
              }) : <p className='i-bottom-p'>{item.sections}</p>} 
          </div>
        </div>
      )
    })
    
  }
    </>
  )
}

export default BottomBlocks
