<template>
  <div class="items-selected">
    <items-list :items="selectedItems" title="Выбранные элементы:">
      <template v-slot="{ item }">
        <button @click="unselect(item)">РАЗВЫБРАТЬ</button>
      </template>
    </items-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemsList from "../views/items-list.vue";
import { itemsModule } from "@/store/items/items.module";
import { Item } from "@/store/items/items.interface";

@Component({
  name: "items-selected",
  components: {
    ItemsList
  }
})
export default class extends Vue {
  get selectedItems() {
    return itemsModule.selectedItems;
  }

  unselect(item: Item): void {
    itemsModule.unselect(item);
  }
}
</script>

<style scoped>
.items-selected {
  margin-top: 39px;
}
</style>
