<script lang="ts">
    import type { CartItem } from "../code/types";
    import increase_icon from "$lib/assets/icons/add_1_icon.svg";
    import decrease_icon from "$lib/assets/icons/remove-icon.svg";
    import trash_icon from "$lib/assets/icons/trash_can.svg";
    import { getFormattedPrice, TestCart } from "$lib/code";

    let { listing, quantity }: CartItem = $props();
    const { name, imageUrl, price, colors } = $derived(listing);

    function decrease_quantity() {
        quantity = Math.max(quantity - 1, 0);
        if (quantity == 0) {
            /* TODO: Remove item from cart */
        }
    }

    function increase_quantity() {
        quantity = Math.min(quantity + 1, 10);
        console.debug(`Test Cart: ${JSON.stringify(TestCart)}`);
    }

    function number_to_ordinal(num: number): string {
        switch (num) {
            case 1:
                return "Primary";
            case 2:
                return "Secondary";
            case 3:
                return "Tertiary";
            default:
                return String(num);
        }
    }
</script>

<div class="cart-card">
    <div class="image-and-quantity-container">
        <div class="image-container">
            <img src={imageUrl} alt="Image for {name}" />
        </div>
        <div class="quantity-buttons-container">
            <button type="button" onclick={decrease_quantity}>
                <img
                    src={quantity > 1 ? decrease_icon : trash_icon}
                    alt="Decrease Icon"
                />
            </button>
            <span>{quantity}</span>
            <button type="button" onclick={increase_quantity}>
                <img src={increase_icon} alt="Increase Icon" />
            </button>
        </div>
    </div>
    <div class="name-and-price-container">
        <p class="name-text">{name}</p>
        <span class="name-price-gap"></span>
        <p class="price-text">{getFormattedPrice(price)}</p>
    </div>
</div>

<style>
    .cart-card {
        margin: 2vh 2vw;

        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    .image-and-quantity-container {
        display: grid;
        grid-template-rows: auto auto;
        row-gap: 1.5vh;
        justify-items: center;
    }

    .image-container {
        width: 50%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        border: 1px solid var(--md-sys-color-inverse-on-surface);
    }

    .image-container > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .quantity-buttons-container {
        width: 50%;
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        justify-items: center;
    }

    .quantity-buttons-container span {
        font-size: 1.5em;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .quantity-buttons-container button {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        width: 50%;

        cursor: pointer;
        border-radius: 50px;
    }

    .name-and-price-container {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    /* .name-and-price-container p {
        font-size: 1.5em;
    } */

    .name-text {
        font-weight: bold;
    }

    .name-price-gap {
        width: 10%;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        .cart-card {
            column-gap: 10%;
        }

        .image-container {
            width: 100%;
        }

        .quantity-buttons-container {
            width: 100%;
        }

        .name-and-price-container {
            flex-direction: column;
        }

        .price-text {
            justify-self: baseline;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .name-and-price-container p {
            font-size: 1.5em;
        }
    }
</style>
