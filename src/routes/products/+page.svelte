<script>
	import Product from './../../components/product/Product.svelte';
    export let data

    $: data = data.data
</script>

<main class="container lg:w-wrap font-monst m-auto space-y-4 py-5">
    <div class=" w-full flex justify-center gap-5 justify-items-center items-center">
        <p class="font-medium">Filter by:</p>
        <button class="bg-white py-1 px-5 font-medium rounded-md border hover:bg-mainColor hover:text-whiteColor">Brand</button>
        <button class="bg-white py-1 px-3 font-medium rounded-md border hover:bg-mainColor hover:text-whiteColor">price</button>
        <button class="bg-white py-1 px-3 font-medium rounded-md border hover:bg-mainColor hover:text-whiteColor">Year</button>
    </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row m-auto gap-4">
        {#each data as item (item.id)}
            <Product item={item}/>
        {/each}
    </div>
</main>