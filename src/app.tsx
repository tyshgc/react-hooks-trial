/**
 * App Route Script
 * TODO:
 * - createCotenxtを外で定義してやろうとするとFCの外に出すなと怒られる
 * - useContextの使い方がいまいちわかってないのでこの辺で詰んでる
 */
import * as React from "react"
import { createContext } from "react"
import * as ReactDOM from "react-dom"

// Stores
import { nabeatsuStore, sakataStore } from "./stores"

// UseCases
import { UseCase } from "./usecases"
export const useCase = new UseCase({ nabeatsuStore, sakataStore })

// Screens
import { Home } from "./view/screens"

// Context
export const StoreContext = createContext({ nabeatsuStore, sakataStore })

const App = () => {
  return (
    <StoreContext.Provider value={{ nabeatsuStore, sakataStore }}>
      <Home />
    </StoreContext.Provider>
  )
}

// Main Renderer
ReactDOM.render(<App />, document.getElementById("app"))
