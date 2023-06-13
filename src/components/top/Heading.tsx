/** This component takes props and contributes rennder of child components */

import { FC } from 'react'
import { HeadingProps } from '../../assets/typesTop'

const Heading: FC<HeadingProps>= ({headingContent, today})=> {
  return (  
    <div className='headingContainer'>
      {headingContent.map((item) => {
        return <div className='heading' key={item.id}>{item.title}</div>
      })}
      <div className='today' key= {today.id}>{today.todayNow}</div>
    </div>
  )
}

export default Heading
