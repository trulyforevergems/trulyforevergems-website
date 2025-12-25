<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="light">
    <h1>Truly Forever Gems</h1>
    <hr />
    <br />
    <nav>
        <h2>Home</h2>
        <h2>Listings</h2>
        <h2>Custom</h2>
        <h2>About</h2>
    </nav>
</header>
<main class="light">
    {@render children()}
</main>
<footer class="light">
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos saepe
        dolorem provident culpa distinctio ea quis voluptates molestias
        possimus, perspiciatis nam fugit nulla soluta quia consequuntur deleniti
        deserunt omnis? Eaque.
    </p>
</footer>
