<template>
  <div class="columns">
    <items-all></items-all>
    <items-selected></items-selected>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemsAll from "@/components/items-all.vue";
import ItemsSelected from "@/components/items-selected.vue";
import { itemsModule } from "@/store/items/items.module";

@Component({
  name: "main-page",
  components: {
    ItemsAll,
    ItemsSelected
  }
})
export default class extends Vue {
  async created(): Promise<void> {
    if (!itemsModule.items.length) {
      await itemsModule.getItems();
    }
  }
}

// third test message
</script>

<style scoped>
.columns {
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
}
</style>
