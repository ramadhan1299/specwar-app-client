import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		hmr: {
		  overlay: false, // Atur ke true jika ingin tampilan pesan kesalahan
		},
	  },
});
