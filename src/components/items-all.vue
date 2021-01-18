<template>
  <div>
    <div class="search">
      <div>Панель поиска</div>
      <input v-model="searchString" type="text" />
    </div>
    <items-list :items="filteredItems" title="Список элементов">
      <template v-slot="{ item }">
        <button @click="select(item)">ВЫБРАТЬ</button>
      </template>
    </items-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/store/items/items.interface";
import { itemsModule } from "@/store/items/items.module";
import ItemsList from "@/views/items-list.vue";

@Component({
  name: "items-all",
  components: {
    ItemsList
  }
})
export default class extends Vue {
  searchString = "";

  /*
   * Отфильтровывем из массива со всеми элементами те элементы, которые выбраны.
   * Затем, если ничего не указано в поле поиска, то отображаем отфильтрованные элементы,
   * если указано, то дополнительно ищем в именах все вхождения поисковой строки, фильтруем элементы с хотя бы 1 совпедением
   * и фильтруем по количеству найденных вхождений в обратном порядке
   * */
  get filteredItems(): Item[] {
    const items = itemsModule.items;
    const filteredItems = items.filter(
      item =>
        !itemsModule.selectedItems.some(
          selectedItem => selectedItem.id === item.id
        )
    );
    if (this.searchString.length) {
      const string = this.searchString.trim().toLowerCase();
      let items = filteredItems.map(filteredItem => {
        let count = filteredItem.name.toLowerCase().includes(string) ? 1 : 0;
        filteredItem.items.forEach(subItem => {
          if (subItem.name.toLowerCase().includes(string)) {
            count++;
          }
        });
        return {
          ...filteredItem,
          count
        };
      });
      items = items.filter(item => item.count > 0);
      items.sort((a, b) => b.count - a.count);
      return items;
    }
    return filteredItems;
  }

  select(item: Item): void {
    itemsModule.select(item);
  }
}
</script>
