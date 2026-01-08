export interface Listing {
    name: string;
    productId: string;
    imageUrl: string;
    colors: string[];
    price: string;
}

export interface CartItem {
    listing: Listing;
    quantity: number;
}
