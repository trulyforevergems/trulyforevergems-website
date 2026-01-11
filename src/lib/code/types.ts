export interface Listing {
    /** The name of the current listing */
    name: string;
    /** An 8-digit long value that uniquely identifies each product */
    productId: string;
    /** The URL to the image of the listing.  */
    imageUrl: string;
    /** The colors of the bracelet (currently not being used). */
    colors: string[];
    /** Price of the bracelet in cents. */
    price: number;
}

export interface CartItem {
    /** The item in the cart. */
    listing: Listing;
    /** The number of this item in the cart */
    quantity: number;
}
