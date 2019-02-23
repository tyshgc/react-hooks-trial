/**
 * Store
 */
import { observable, action, computed } from "mobx"

// World Wide Nabeatus State Model
export class WorldWideNabeatsuState {
  @observable
  count: number = 0

  @action
  countup(): void {
    this.count += 1
  }

  @computed
  get message(): string {
    return this.count > 0 ? `${this.count}!` : `3の倍数の時だけアホになります！`
  }

  @computed
  get isAho(): boolean {
    const isZeroOver = this.count > 0
    const hasThree = `${this.count}`.match(/3/) || []
    const canDivide = this.count % 3 === 0

    return isZeroOver && (canDivide || hasThree.length > 0)
  }
}

// Sakata State Model
export class SakataState {
  @observable
  positionTop: number = -999

  @observable
  positionLeft: number = -999

  @action
  randomizePosition(): void {
    this.positionLeft = Math.random() * window.innerWidth
    this.positionTop = Math.random() * window.innerHeight
  }

  @action
  blownAway(): void {
    this.positionLeft = -999
    this.positionTop = -999
  }
}

// Store Factory
export const nabeatsuStore = new WorldWideNabeatsuState()
export const sakataStore = new SakataState()
