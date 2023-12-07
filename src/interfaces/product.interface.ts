export default interface Product {
    id?: number,
    photo: any,
    name: string,
    brand?: string,
    description: string,
    price: number,
    count?: number,
    onClick?: any,
}