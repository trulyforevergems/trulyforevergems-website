<script lang="ts">
    import { resolve } from "$app/paths";
    import { type Listing } from "./types";

    const { name, productId, imageUrl, price }: Listing = $props();
</script>

<div class="listing-card dark">
    <p>{name}</p>
    <div class="image-container">
        <img src={imageUrl} alt="image for {name}" />
    </div>
    <div class="price-and-button-container">
        <p>{price}</p>
        <button type="button">Add to Cart</button>
    </div>
</div>

<style>
    p {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;

        background-color: black;
        color: var(--md-sys-color-primary-container);
    }

    .listing-card {
        /* background-color: var(--md-sys-color-secondary-container); */
        border: 1px solid white;
        /* border:; */
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

        /* cursor: pointer; */
    }

    .price-and-button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        margin-top: 1vh;
        margin-bottom: 2vh;
        padding: 1vh;

        cursor: pointer;
    }
</style>
