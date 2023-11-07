<script>
  import Ranking from "../../routes/products/components/Ranking.svelte";
  import Afiliate from "./Afiliate.svelte";
  import Card from "./Card.svelte";
  import Tabs from "./Tabs.svelte";

  export let item
</script>

<div class="w-full cursor-default bg-white">
    <Card data={item}>
        <Ranking value={item.rank}/>
    </Card>
    <Afiliate/>
    <Tabs data={item.Specs}/>
</div>