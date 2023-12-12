export default interface Product {
    id: number,
    photo: string,
    name: string,
    brand?: string,
    description: string,
    price: number,
    count?: number,
    onClick?: any,
}