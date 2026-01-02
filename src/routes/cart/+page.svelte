<script>
    import { TestCart } from "$lib";
    import CartCard from "$lib/CartCard.svelte";
</script>

<div id="content-container">
    <div id="cart-items-container" class="dark">
        <p id="cart-items-heading">Cart Items</p>
        <hr />
        {#each TestCart as { listing, quantity }, index}
            <CartCard {listing} {quantity} />
            {#if index < TestCart.length - 1}
                <hr />
            {/if}
        {/each}
    </div>
    <button type="button" id="checkout-button" class="dark"
        >Proceed to Checkout</button
    >
</div>

<style>
    #content-container {
        padding: 5vh 5vw;
        min-height: 70vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #cart-items-container {
        background-color: var(--md-sys-color-inverse-surface);
        width: 80%;
    }

    #cart-items-heading {
        text-align: center;
        font-size: 2em;
    }

    #checkout-button {
        background-color: var(--md-sys-color-inverse-surface);

        margin: 5vh 2vw;
        padding: 1vh 1vw;
        border-radius: 25px;

        width: 50%;
        aspect-ratio: 8 / 1;

        font-size: 1em;
    }

    #checkout-button:hover {
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        border: 2px solid var(--md-sys-color-primary);

        cursor: pointer;
    }
</style>
