import store from "../index";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from "vuex-module-decorators";
import { dataProvider } from "@/services/dataProvider";
import { Item } from "@/store/items/items.interface";
import { historyModule } from "@/store/history/history.module";

@Module({
  namespaced: true,
  dynamic: true,
  store,
  name: "items"
})
class ItemsModule extends VuexModule {
  items: Item[] = [];
  selectedItems: Item[] = [];

  @Action
  async select(item: Item) {
    this.setSelectedItems([...this.selectedItems, item]);
    await historyModule.add(item);
  }

  @Action
  async unselect(item: Item) {
    this.setSelectedItems(this.selectedItems.filter(i => i.id !== item.id));
    await historyModule.remove(item);
  }

  @Action
  async getItems(): Promise<void> {
    const items = await dataProvider.get<Item[]>("items");
    this.setItems(items);
  }

  @Mutation
  private setItems(items: Item[]): void {
    this.items = items;
  }

  @Mutation
  private setSelectedItems(items: Item[]): void {
    this.selectedItems = items;
  }
}

export const itemsModule = getModule(ItemsModule);
