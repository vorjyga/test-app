<template>
  <div class="history-block">
    <h2>
      {{ title }}
    </h2>
    <template v-if="items.length">
      <div v-for="(item, index) in items" :key="index">
        <ul>
          <li>id: {{ item.id }}</li>
          <li>name: {{ item.name }}</li>
          <li>type: {{ item.type }}</li>
          <li>date: {{ item.time.toUTCString() }}</li>
        </ul>
      </div>
    </template>
    <template v-else>
      <div>
        Тут ничего нет :с
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { historyModule } from "@/store/history/history.module";
import { TransferType } from "@/store/history/action.interface";

@Component({
  name: "history"
})
export default class extends Vue {
  get title(): string {
    let title = "История ";
    switch (this.$route.params.show) {
      case "adding":
        title += "добавлений";
        break;
      case "removing":
        title += "возвращений";
        break;
      default:
        title += "всех действий";
    }
    return title;
  }

  get items() {
    return historyModule.history(this.$route.params.show as TransferType);
  }
}
</script>

<style scoped>
.history-block {
  max-width: 400px;
  text-align: left;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
