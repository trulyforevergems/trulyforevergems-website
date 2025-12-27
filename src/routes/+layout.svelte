<script lang="ts">
    import { resolve } from "$app/paths";
    import favicon from "$lib/assets/favicon.svg";
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="dark">
    <h1>Truly Forever Gems</h1>
    <hr />
    <br />
    <nav>
        <h2><a href={resolve("/")}>Home</a></h2>
        <h2><a href={resolve("/listings")}>Listings</a></h2>
        <h2><a href={resolve("/custom")}>Custom</a></h2>
        <h2><a href={resolve("/about")}>About</a></h2>
    </nav>
</header>
<main class="dark">
    {@render children()}
</main>
<footer class="dark">
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos saepe
        dolorem provident culpa distinctio ea quis voluptates molestias
        possimus, perspiciatis nam fugit nulla soluta quia consequuntur deleniti
        deserunt omnis? Eaque.
    </p>
</footer>
