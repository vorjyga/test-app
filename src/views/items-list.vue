<template functional>
  <div class="items-list">
    <h3>
      {{ props.title }}
    </h3>
    <template v-if="props.items.length">
      <div v-for="item in props.items" :key="item.id" class="item-block">
        <div class="item-description">
          <ul>
            <li v-if="item.count">найдено вхождений: {{ item.count }}</li>
            <li>id: {{ item.id }}</li>
            <li>name: {{ item.name }}</li>
            <li>items:</li>
            <ul v-for="subItem in item.items" :key="subItem.id">
              <li>id: {{ subItem.id }}</li>
              <li>name: {{ subItem.name }}</li>
            </ul>
          </ul>
        </div>
        <slot :item="item"></slot>
      </div>
    </template>
    <template v-else>
      <div>
        Тут ничего нет :с
      </div>
    </template>
  </div>
</template>

<style scoped>
.item-block {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
</style>
