import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from "vuex-module-decorators";
import store from "@/store";
import { ActionItem, TransferType } from "@/store/history/action.interface";
import { Item } from "@/store/items/items.interface";

@Module({
  namespaced: true,
  dynamic: true,
  store,
  name: "history"
})
class HistoryModule extends VuexModule {
  private actionsLog: ActionItem[] = [];

  get history() {
    return (transferType?: TransferType) =>
      transferType
        ? this.actionsLog.filter(action => action.type === transferType)
        : this.actionsLog;
  }

  @Action
  async add(item: Item): Promise<void> {
    this.pushAction({
      id: item.id,
      name: item.name,
      time: new Date(),
      type: "adding"
    });
  }

  @Action
  async remove(item: Item): Promise<void> {
    this.pushAction({
      id: item.id,
      name: item.name,
      time: new Date(),
      type: "removing"
    });
  }

  @Mutation
  private pushAction(action: ActionItem) {
    this.actionsLog.push(action);
  }
}

export const historyModule = getModule(HistoryModule);
