import testImageOne from "$lib/assets/images/test_image_one.jpg";
import testImageTwo from "$lib/assets/images/test_image_two.jpg";
import testImageThree from "$lib/assets/images/test_image_three.jpg";
import testImageFour from "$lib/assets/images/test_image_four.jpg";
import type { CartItem, Listing } from "./types";

/**
 * Converts the price (in cents) to a formatted string.
 */
export function getFormattedPrice(price: number): string {
    let usdFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return usdFormat.format(price / 100);
}

export const TestListings: Listing[] = [
    {
        name: "Test 1",
        productId: "0001",
        imageUrl: testImageOne,
        price: 25_00,
        colors: ["#F48694", "#F6DF69", "#F5C5B9"],
    },
    {
        name: "Test 2",
        productId: "0002",
        imageUrl: testImageTwo,
        price: 50_00,
        colors: ["#773F95", "#E3ABDE"],
    },
    {
        name: "Test 3",
        productId: "0003",
        imageUrl: testImageThree,
        price: 75_00,
        colors: ["#E7C653", "#E9A897", "#FEEDD8"],
    },
    {
        name: "Test 4",
        productId: "0004",
        imageUrl: testImageFour,
        price: 100_00,
        colors: ["#C24058", "#F2C0D3", "#EDEFF5"],
    },
];

export const TestCart: CartItem[] = [
    {
        listing: TestListings[0],
        quantity: 1,
    },
    {
        listing: TestListings[1],
        quantity: 2,
    },
    {
        listing: TestListings[2],
        quantity: 3,
    },
    {
        listing: TestListings[3],
        quantity: 4,
    },
];
