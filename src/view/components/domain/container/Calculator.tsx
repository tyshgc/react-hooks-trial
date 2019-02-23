/**
 * Calculator Container
 */
import * as React from "react"
import { useContext, useEffect, FunctionComponent } from "react"
import { observer } from "mobx-react-lite"

// Context
import { StoreContext } from "../../../../app"

// UseCases
import { useCase } from "../../../../app"

// Components
import { CalculationDisplay } from "../element"

// Container
export const Calculator: FunctionComponent = observer(() => {
  const { nabeatsuStore } = useContext(StoreContext)
  const { message, count, isAho } = nabeatsuStore

  const displayProps = {
    message,
    onCalculation: () => useCase.onTappedCalculatorButton(),
  }

  useEffect(() => {
    if (count === 0) return

    if (isAho) {
      console.log(`${count}, あほ!!`)
    } else {
      console.log(`${count}!!`)
    }
  }, [count])

  return <CalculationDisplay {...displayProps} />
})
