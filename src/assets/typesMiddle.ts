//** This types of variables and JSX elenets of content of Middle area page */

export interface IYandexServices {
    id: number, 
    ref: string,
    title: string
}

export type YandexServicesProps = {
    yandexServices: IYandexServices[];
}

export type searchProps = {
    instance: string;
}

export interface IAds {
    id: number,
    img: string
}

export type YandexAdsProps = {
    ads: IAds;
}