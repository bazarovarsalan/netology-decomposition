export interface IHeadingContent {
    id: number,
    title: string
}

export interface IToday {
    id: number,
    todayNow: string;
}

export interface INews {
    id: number,
    image: string,
    topic:string
}

export interface IExchangeValues {
    id: number,
    title: string,
    value:string,
    changeValue: string
}

export interface ITopRight {
    id: number,
    image: string, 
    title: string, 
    description: string

}

export type HeadingProps = {
    headingContent: IHeadingContent[];
    today: IToday;
}

export type NewsProps = {
    news: INews[];
}

export type ExchangeProps = {
    exchangeValues: IExchangeValues[];
}
