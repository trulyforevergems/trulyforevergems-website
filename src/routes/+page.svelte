<svelte:head>
    <title>Home | Truly Forever Gems</title>
</svelte:head>

<div class="background-container dark">
    <div class="text-container">
        <h1 class="dark">Home</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at
            libero perspiciatis nobis eum aspernatur quis facere. Corporis nobis
            nam animi aliquam dolore aliquid vero, nihil laudantium culpa
            excepturi odio. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut, eum. Quisquam error temporibus quas harum adipisci ipsam
            dolorem dolorum quos architecto quasi, vero, quis corporis, sapiente
            quo. Molestias, cumque omnis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Harum cumque, accusamus labore nisi natus,
            inventore facere, nihil maiores vitae incidunt totam exercitationem
            rerum deleniti consequuntur magni. Itaque corrupti reprehenderit ea.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            quibusdam. Deserunt earum sit minima quaerat voluptas, corrupti nulla
            consequatur illum eligendi! Ab quam cumque architecto similique doloremque
            ratione expedita hic! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Id et distinctio accusantium quisquam dolores nobis, illo natus
            facilis eius cupiditate voluptatum ea non illum hic incidunt, ducimus
            eligendi harum officiis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Amet excepturi esse ut illo, repellendus repellat tempore incidunt
            deleniti perspiciatis totam cumque error aut quidem dolores explicabo
            numquam saepe, fugiat deserunt?
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            quibusdam. Deserunt earum sit minima quaerat voluptas, corrupti nulla
            consequatur illum eligendi! Ab quam cumque architecto similique doloremque
            ratione expedita hic! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Id et distinctio accusantium quisquam dolores nobis, illo natus
            facilis eius cupiditate voluptatum ea non illum hic incidunt, ducimus
            eligendi harum officiis? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Amet excepturi esse ut illo, repellendus repellat tempore incidunt
            deleniti perspiciatis totam cumque error aut quidem dolores explicabo
            numquam saepe, fugiat deserunt?
        </p>
    </div>
</div>

<style>
    .background-container {
        padding: 5vh 0;

        background-image: url("$lib/assets/images/forever-gems-splash.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text-container {
        background-color: var(--md-sys-color-surface);
        padding: 2vh 2vw;
        width: 50%;
    }

    .text-container > :is(h1, p) {
        color: var(--md-sys-color-on-surface);
    }
</style>
