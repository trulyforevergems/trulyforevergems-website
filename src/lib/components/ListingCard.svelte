<script lang="ts">
    import { type Listing } from "../code/types";

    const { name, imageUrl, price }: Listing = $props();
    let quantity = $state(0);

    function decrease_quantity() {
        /* The UI should make it impossible for quantity to go below zero, but this is just extra
        insurance. */
        quantity = Math.max(0, quantity - 1);
    }

    function increase_quantity() {
        quantity = Math.min(10, quantity + 1);
    }
</script>

<div class="listing-card dark">
    <p>{name}</p>
    <div class="image-container">
        <img src={imageUrl} alt="image for {name}" />
    </div>
    <div class="price-and-button-container">
        <p>{price}</p>
        {#if quantity == 0}
            <button type="button" onclick={increase_quantity}>
                Add to Cart
            </button>
        {:else}
            <div class="quantity-selection-container">
                <button type="button" onclick={decrease_quantity}>-</button>
                <p>{quantity}</p>
                <button type="button" onclick={increase_quantity}>+</button>
            </div>
        {/if}
    </div>
</div>

<style>
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;

        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-primary-container);
    }

    .listing-card {
        border: 1px solid white;
        overflow: hidden;
    }

    .image-container {
        width: 100%;
        aspect-ratio: 1 / 1;
        overflow: hidden;

        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .price-and-button-container {
        display: grid;
        grid-template-rows: 1fr 2fr;
        align-items: center;
        justify-items: center;
    }

    button {
        margin-top: 1vh;
        margin-bottom: 2vh;
        padding: 1vh 1vw;

        font-size: 1em;

        border-radius: 25px;

        background-color: var(--md-sys-color-primary-container);
        color: var(--md-sys-color-on-primary-container);

        cursor: pointer;
    }

    .quantity-selection-container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
    }

    .quantity-selection-container button {
        aspect-ratio: 1 / 1;
        border-radius: 50%;
    }
</style>
