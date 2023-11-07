<script>
	import { isDisplayTab, isPerformanceTab, isCameraTab, isBatteryTab, isAudioTab } from './store.js';
    export let data

    let display = data.find(item => item.title === 'Display');
    let performance = data.find(item => item.title === 'Performance');
    let camera = data.find(item => item.title === 'Camera');
    let battery = data.find(item => item.title === 'Battery');
    let audio = data.find(item => item.title === 'Audio');
</script>

{#if $isDisplayTab}
    {#each display.details as detail (detail.title)}
        <div class="leading-tight w-full">
            <tr class="w-full">
                <td class="text-start font-medium">{detail.title}</td>
            </tr>
            <tr>
                <td class="italic">{detail.description}</td>
            </tr>
        </div>
    {/each}
{:else if  $isPerformanceTab}
    {#each performance.details as detail (detail.title)}
        <div class="leading-tight w-full">
            <tr class="w-full">
                <td class="text-start font-medium">{detail.title}</td>
            </tr>
            <tr>
                <td class="italic">{detail.description}</td>
            </tr>
        </div>
    {/each}
{:else if  $isCameraTab}
    {#each camera.details as detail (detail.title)}
        <div class="leading-tight w-full">
            <tr class="w-full">
                <td class="text-start font-medium">{detail.title}</td>
            </tr>
            <tr>
                <td class="italic">{detail.description}</td>
            </tr>
        </div>
    {/each}
{:else if  $isBatteryTab}
    {#each battery.details as detail (detail.title)}
        <div class="leading-tight w-full">
            <tr class="w-full">
                <td class="text-start font-medium">{detail.title}</td>
            </tr>
            <tr>
                <td class="italic">{detail.description}</td>
            </tr>
        </div>
    {/each}
{:else if  $isAudioTab}
    {#each audio.details as detail (detail.title)}
        <div class="leading-tight w-full">
            <tr class="w-full">
                <td class="text-start font-medium">{detail.title}</td>
            </tr>
            <tr>
                <td class="italic">{detail.description}</td>
            </tr>
        </div>
    {/each}
{/if}