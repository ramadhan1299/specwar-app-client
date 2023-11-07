<script>
    import "../app.css"
  import Footer from "../components/layout/Footer.svelte";
  import Header from "../components/layout/Header.svelte";
  Footer
</script>

<Header/>
<main>
    <slot/>
</main>
<Footer/>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>