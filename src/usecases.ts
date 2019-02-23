/**
 * UseCases
 */
import { WorldWideNabeatsuState, SakataState } from "./stores"

// Types
interface UseCaseStoreIF {
  nabeatsuStore: WorldWideNabeatsuState
  sakataStore: SakataState
}

// UseCase
export class UseCase {
  stores: UseCaseStoreIF

  constructor(stores: UseCaseStoreIF) {
    this.stores = stores
  }

  // ユーザは、計算ボタンをタップする
  onTappedCalculatorButton(): void {
    const { nabeatsuStore, sakataStore } = this.stores

    nabeatsuStore.countup()
    if (nabeatsuStore.isAho) {
      sakataStore.randomizePosition()
    } else {
      sakataStore.blownAway()
    }
  }
}
