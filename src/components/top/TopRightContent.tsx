//**  This render content on the top right area of this page */

import { ITopRight} from "../../assets/typesTop";
import { FC } from "react";

const TopRightContent: FC<ITopRight> = ({id, image, title,description}) => {
 
  return (
    <div className='topContentRight' key={id}>
        <a className='topRight-image' href={image} >
            <img
            src={image}
            alt={'advertisement'}
            />
            </a>
        <a className="topRight-title">{title}</a>
        <a className="topRight-description">{description}</a>

    </div>
  )
}

export default TopRightContent;
