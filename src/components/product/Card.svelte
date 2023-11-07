<script>
    import { onMount } from "svelte";
  import SpecDetail from "./SpecDetail.svelte";
    export let data;
    let priceIdr = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            }).format(data.price);
    $: priceIdr = priceIdr.slice(0, -3)

    let toggleBtnCompare = false

    onMount(()=> {
        toggleBtnCompare = false
    })

    function handleBtnCompare () {
        toggleBtnCompare = !toggleBtnCompare
    }
</script>

    <div class="m-auto bg-white px-4 pt-6 w-full relative h-[360px]">
        <div class="flex w-full justify-center">
            <div class="w-1/2 pr-2">
                <img src={data.image_url} alt="" class="h-56 m-auto cursor-pointer">
                <div class="h-12 w-12 rounded-full absolute top-4 left-4 bg_img">
                    <slot/>
                    <p class="relative score font-semibold">{data.rank}</p>
                </div>
            </div>
            <div class="w-1/2 h-56 overflow-auto">
                <SpecDetail data={data.Specs}/>
            </div>
        </div>
        <div class="flex w-full justify-end mt-3">
            <p class="rounded-tl-lg py-1 px-2 font-medium bg-gradient-to-l from-yellow-300 to-orange-500 text-whiteColor text-end cursor-pointer hover:scale-105 duration-200">{priceIdr}</p>
        </div>
        <div class="flex justify-between justify-items-center items-start mt-2 relative overflow-hidden">
            <p class="text-xl font-semibold cursor-pointer hover:underline underline-offset-1">{data.title}</p>
            <div class="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-800 px-2 text-white rounded-tl-lg absolute cursor-pointer {toggleBtnCompare ? 'show' : '_hidden'}" on:mouseenter={handleBtnCompare} on:mouseleave={handleBtnCompare}>
                <i class='bx bx-git-compare text-xl'></i>
                <p class="font-medium">| Add to comparison</p>
            </div>
        </div>
    </div>

    <style>
        .show {
            right: 0;
            transition: 0.3s ease;
        }

        ._hidden {
            right: -174px;
            transition: 0.3s ease;
        }

        .score {
            bottom: 35px;
            left: 14px;
        }
        .bg_img {
            background: rgb(255, 255, 255, 0.7);        }
    </style>