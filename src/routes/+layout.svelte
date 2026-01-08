<script lang="ts">
    import { resolve } from "$app/paths";
    import favicon from "$lib/assets/favicon.svg";
    import shopping_cart_icon from "$lib/assets/shopping_cart.svg";
    import account_icon from "$lib/assets/account.svg";
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<header class="dark">
    <div id="header-top">
        <h1><a href={resolve("/")}>Truly Forever Gems</a></h1>
        <div id="icons-container">
            <a href={resolve("/cart")} class="icon-link">
                <img src={shopping_cart_icon} alt="Shopping Cart Icon" />
            </a>
            <a href={resolve("/account")} class="icon-link">
                <img src={account_icon} alt="Account Icon" />
            </a>
        </div>
    </div>
    <hr />
    <nav>
        <h2><a href={resolve("/")}>Home</a></h2>
        <h2><a href={resolve("/listings")}>Listings</a></h2>
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

<style>
    #header-top {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    #icons-container {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 4vw;

        position: absolute;
        right: 8vw;

        width: 10%;
    }

    #icons-container img {
        width: max(75%, 25px);
    }
</style>
