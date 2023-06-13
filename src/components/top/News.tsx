/** News component takes props in the form of arrays of objects and  provides render of news.  */

import { NewsProps } from "../../assets/typesTop"
import { FC } from "react"

const News: FC<NewsProps> = ({news}) => {
  return (
    <div className="news">
      {news.map((newsItem) => {
        return (
        <div className='news-topic' key={newsItem.id}>
            <a className='newsItem-image' href={newsItem.image} >
                <img
                src={newsItem.image}
                alt={'news'}
                />
            </a>
            <a className="news-topic-text">{newsItem.topic}</a>
        </div>
        )}) }
    </div>
  )
}

export default News
