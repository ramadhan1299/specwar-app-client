<script>
    import { onMount } from "svelte";

    let toggle_sidebar = false
    let toggle_dropdown = false
    let y

    onMount(() => {
        toggle_sidebar = false
        toggle_dropdown = false
    })

    function handleSidebar() {
        toggle_sidebar = !toggle_sidebar
    }
    function handleDropdown() {
        toggle_dropdown = !toggle_dropdown
    }
</script>

<svelte:window bind:scrollY={y} />

<nav class="w-full bg-mainColor fixed {y > 250 ? 'show' : 'dropdown_hidden'} z-50">
    <div class="container lg:w-wrap mx-auto uppercase font-semibold text-whiteColor font-monst">
        <div class="grid lg:grid-cols-2 items-center py-4 px-5 lg:px-0">
            <div class="flex justify-between">
                <h1 class="text-3xl font-bold capitalize italic cursor-pointer">specwar.</h1>
                <i class='bx bx-menu text-end text-3xl lg:hidden' on:click={handleSidebar}></i>
            </div>
            <div class="hidden lg:block">
                <div class="justify-between gap-10 flex">
                    <a href="/" class="hover:text-blueColor">home</a>
                    <a href="/" class="hover:text-blueColor">products</a>
                    <a href="/" class="hover:text-blueColor">articles</a>
                    <a href="/" class="hover:text-blueColor">about us</a>
                </div>
            </div>
        </div>
    </div>
</nav>

<nav class="w-full bg-white z-50">
    <div class="container lg:w-wrap mx-auto uppercase font-semibold text-mainColor font-monst">
        <div class=" justify-between items-center py-3 hidden lg:flex">
            <div class="relative">
                <div class="flex items-center cursor-pointer gap-3" on:click={handleDropdown}>
                    <p class="capitalize">indonesia</p>
                    <i class='bx bx-chevron-down'></i>
                </div>
                <div class="absolute rounded-sm bg-mainColor p-4 text-gray-400 {toggle_dropdown ? 'show' : 'dropdown_hidden'}" on:mouseleave={handleDropdown}>
                    <ul class="capitalize">
                        <li class="hover:text-whiteColor cursor-pointer">English</li>
                        <li class="hover:text-whiteColor cursor-pointer">Japanese</li>
                        <li class="hover:text-whiteColor cursor-pointer">Arabic</li>
                    </ul>
                </div>
            </div>
            <div>
                <div class="border border-mainColor rounded-full flex items-center pr-2">
                    <input type="text" class="border-transparent focus:border-transparent focus:ring-0 italic text-sm" placeholder="Search device...">
                    <i class='bx bx-search text-xl cursor-pointer'></i>
                </div>
            </div>
        </div>
        <hr class="hidden lg:block">
        <div class="grid lg:grid-cols-2 items-center py-4 px-5 lg:px-0">
            <div class="flex justify-between">
                <h1 class="text-3xl font-bold capitalize italic cursor-pointer">specwar.</h1>
                <i class='bx bx-menu text-end text-3xl lg:hidden' on:click={handleSidebar}></i>
            </div>
            <div class="hidden lg:block">
                <div class="justify-between gap-10 flex">
                    <a href="/" class="hover:text-blueColor">home</a>
                    <a href="/" class="hover:text-blueColor">products</a>
                    <a href="/" class="hover:text-blueColor">articles</a>
                    <a href="/" class="hover:text-blueColor">about us</a>
                </div>
            </div>
        </div>
    </div>
</nav>

<div class="w-full h-screen bg-mainColor flex flex-col items-start text-whiteColor uppercase gap-4 lg:hidden fixed top-0 px-8 {toggle_sidebar ? 'show' : 'sidebar_hidden'} z-50">
    <div class="flex justify-between w-full items-center py-4">
        <h1 class="text-3xl font-bold capitalize italic cursor-pointer">specwar.</h1>
        <i class='bx bx-x text-3xl'  on:click={handleSidebar}></i>
    </div>
    <div>home</div>
    <hr class="w-full">
    <div>products</div>
    <hr class="w-full">
    <div>articles</div>
    <hr class="w-full">
    <div>about us</div>
    <hr class="w-full">
    <div class="relative w-full" on:click={handleDropdown}>
        <div class="flex items-center cursor-pointer">
            <p class="capitalize">indonesia</p>
            <i class='bx bx-chevron-down'></i>
        </div>
        <ul class="capitalize ml-10 flex flex-col gap-1 pt-2 {toggle_dropdown ? 'show static' : 'dropdown_hidden absolute'}">
            <li>English</li>
            <li>Japanese</li>
            <li>Arabic</li>
        </ul>
    </div>
    <hr class="w-full">
</div>

<style>
  input {
        background-color: rgba(255, 255, 255, 0); /* Format rgba dengan tingkat transparansi (alpha) 0.5 */
        height: 0;
        border: none;
    }

    .sidebar_hidden {
        -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
        transition: 0.3s ease;
    }

    .show {
        -webkit-clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
        clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
        transition: 0.3s ease;
    }

    .dropdown_hidden {
        -webkit-clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
        clip-path: polygon(100% 0, 0 0, 0 0, 100% 0);
        transition: 0.3s ease;
    }
</style>