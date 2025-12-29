<script>
    import { TestListings } from "$lib";
    import ListingCard from "$lib/ListingCard.svelte";
</script>

<svelte:head>
    <title>Listings | Truly Forever Gems</title>
</svelte:head>

<div class="cards-container">
    {#each TestListings as { name, productId, imageUrl, price }}
        <ListingCard {name} {productId} {imageUrl} {price} />
    {/each}
</div>

<style>
    .cards-container {
        margin: 0 5vw;

        display: grid;
        max-width: 1200px;
        grid-template-columns: repeat(
            auto-fit,
            minmax(clamp(160px, 25vw, 240px), 1fr)
        );
        justify-items: stretch;
        column-gap: 2vw;
        row-gap: 2vh;
    }
</style>
