export interface Product {
    productCode: string;
    productName: string;
    brand: string;
    quantityType: string;
    rate: number;
    stockCount: number;
    addDate: Date;
    aisle: string;
    shelf: string;
    dateOfManufacture: Date;
    dateOfExpiry: Date;
    image: string;
    category: Category;
}
export interface Category {
    categoryId: number;
    categoryName: string;
}
export interface Offer {
    offerId: number;
    offerDate: Date;
    discountRate: number;
    offerName: string;
    product: Product;
}