import { User } from './site/user';
import { Product } from './product/product.model';

export interface Bill {
    billId?: number; //add GeneratedValue in java
    user: User; //many-one
    total: number;
    rewardPoints?: number;
    date: Date;
    purchaseItems: PurchaseItem[]; //one-many
}

export interface PurchaseItem {
    purchaseId?: number; //add GeneratedValue in java
    product: Product; //one-one
    quantity: number;
    price: number;
    bill?: Bill;
}