<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<h1 style="color: white;">Listing Page for {data.productId}</h1>
