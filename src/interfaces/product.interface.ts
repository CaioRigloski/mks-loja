export default interface Product {
    id: number,
    photo: HTMLImageElement | File | string | undefined,
    name: string,
    brand?: string,
    description: string,
    price: number,
    count?: number,
    onClick?: any,
}