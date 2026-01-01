import test_image_one from "$lib/assets/test_image_one.jpg";
import test_image_two from "$lib/assets/test_image_two.jpg";
import test_image_three from "$lib/assets/test_image_three.jpg";
import test_image_four from "$lib/assets/test_image_four.jpg";

export interface Listing {
    name: string;
    productId: string;
    imageUrl: string;
    price: string;
}

export let TestListings = [
    {
        name: "Test 1",
        productId: "0001",
        imageUrl: test_image_one,
        price: "$25.00",
    },
    {
        name: "Test 2",
        productId: "0002",
        imageUrl: test_image_two,
        price: "$50.00",
    },
    {
        name: "Test 3",
        productId: "0003",
        imageUrl: test_image_three,
        price: "$75.00",
    },
    {
        name: "Test 4",
        productId: "0004",
        imageUrl: test_image_four,
        price: "$100.00",
    },
];
