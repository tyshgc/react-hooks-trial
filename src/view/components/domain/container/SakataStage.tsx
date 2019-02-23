/**
 * Domain Container/
 * Sakata Stage
 */
import * as React from "react"
import { useContext, FunctionComponent } from "react"
import { observer } from "mobx-react-lite"

// Context
import { StoreContext } from "../../../../app"

// Components
import { Sakata } from "../element"

// Container
export const SakataStage: FunctionComponent = observer(() => {
  const { sakataStore } = useContext(StoreContext)
  const { positionLeft, positionTop } = sakataStore

  return <Sakata top={positionTop} left={positionLeft} />
})
