<script lang="ts">
    import { resolve } from "$app/paths";
    import { type Listing } from "./types";

    const { name, productId, imageUrl, price }: Listing = $props();
</script>

<div class="listing-card dark">
    <p>{name}</p>
    <div class="image-container">
        <a href={resolve(`/listings/${productId}`)}>
            <img src={imageUrl} alt="image for {name}" />
        </a>
    </div>
    <p>{price}</p>
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

    p:first-child {
        border-bottom: 1px solid white;
    }

    p:last-child {
        border-top: 1px solid white;
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
    }

    .image-container:hover {
        opacity: 0.5;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

        cursor: pointer;
    }
</style>
