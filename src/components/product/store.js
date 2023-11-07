import { writable } from 'svelte/store';

export let isDisplayTab = writable(true)
export let isPerformanceTab = writable(false)
export let isCameraTab = writable(false)
export let isBatteryTab = writable(false)
export let isAudioTab = writable(false)