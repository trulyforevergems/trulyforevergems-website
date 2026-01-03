<script lang="ts">
    import type { CartItem } from "./types";

    let { listing, quantity }: CartItem = $props();
    const { name, imageUrl, price, colors } = $derived(listing);

    function decrease_quantity() {
        quantity = Math.max(quantity - 1, 1);
    }

    function increase_quantity() {
        quantity = Math.min(quantity + 1, 10);
    }
</script>

<div class="cart-card">
    <div class="image-and-quantity-container">
        <div class="image-container">
            <img src={imageUrl} alt="Image for {name}" />
        </div>
        <div class="quantity-buttons-container">
            <button type="button" onclick={decrease_quantity}> - </button>
            <span>{quantity}</span>
            <button type="button" onclick={increase_quantity}> + </button>
        </div>
    </div>
    <div class="name-and-style-container">
        <p>{name}</p>
        <ul class="colors-list">
            {#each colors as color, index}
                <li class="colors-list-item">
                    <label for="from-color-num-{index}"
                        >Color #{index + 1}:&ensp;
                    </label>
                    <input
                        type="color"
                        name="from-color-num-{index}"
                        value={color}
                        disabled
                    />
                    <span>&ensp;&rightarrow;&ensp;</span>
                    <input type="color" value="#FFFF00" disabled />
                </li>
            {/each}
        </ul>
    </div>
    <p>{price}</p>
</div>

<style>
    .cart-card {
        margin: 2vh 2vw;

        display: grid;
        grid-template-columns: 2fr 3fr 1fr;
        align-items: center;
    }

    .image-and-quantity-container {
        display: grid;
        grid-template-rows: 6fr 1fr;
        row-gap: 1.5vh;
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
    }

    .quantity-buttons-container > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        cursor: pointer;
        border-radius: 50px;
    }

    .name-and-style-container {
        align-self: baseline;
    }

    .name-and-style-container p {
        font-size: 2em;
    }

    .colors-list {
        padding-left: 3vw;
    }

    .colors-list-item {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    input[type="color"] {
        border: none;
    }

    li + li {
        margin-top: 2vh;
    }
</style>
