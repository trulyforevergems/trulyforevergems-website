<script>
    import { TestListings } from "$lib/code";
    import ListingCard from "$lib/components/ListingCard.svelte";
</script>

<svelte:head>
    <title>Listings | Truly Forever Gems</title>
</svelte:head>

<div class="cards-container">
    {#each TestListings as { name, productId, imageUrl, price, colors }}
        <ListingCard {name} {productId} {imageUrl} {price} {colors} />
    {/each}
</div>

<style>
    .cards-container {
        margin: 0 2vw;
        padding: 5vh 0;

        display: grid;
        max-width: 1200px;
        grid-template-columns: repeat(
            auto-fit,
            minmax(clamp(160px, 25vw, 240px), 1fr)
        );
        justify-items: stretch;
        /* Row and column gap should be the same. */
        column-gap: 2vh;
        row-gap: 2vh;
    }
</style>
