<script lang="ts">
    import { type Listing, TestListings } from "$lib";

    const { name, productId, imageUrl, price }: Listing = $props();
</script>

<div class="listing-card dark">
    <p>{name}</p>
    <div class="image-container">
        <img src={imageUrl} alt="image for {name}" />
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
    }

    .listing-card {
        background-color: var(--md-sys-color-secondary-container);
        overflow: hidden;
    }

    .image-container {
        width: 100%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
    }

    .image-container > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>
