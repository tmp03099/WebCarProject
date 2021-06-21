export interface PriceInterface{
    carImgSrc: string;
    carPrices: CarPriceInterface[];
    linkDetail: string;
}

export interface CarPriceInterface{
    brand: string;
    price: string;
}