//** Exchange component render values  of pirces of currencies and oil */

import { ExchangeProps } from "../../assets/typesTop";
import { FC } from "react";


const Exchange: FC<ExchangeProps> = ({exchangeValues}) => {
  return (
    <div className="exchange">
      {exchangeValues.map((exchange) => {
        return (
        <div className="exchange" key={exchange.id}>
            <div className="exchangeTitle">{exchange.title}</div>
            <div className="exchangeValue">{exchange.value}</div>
            <div className="exchangeChangeValue">{exchange.changeValue}</div>
        </div>
      )}) }
    </div>
  )
}

export default Exchange
