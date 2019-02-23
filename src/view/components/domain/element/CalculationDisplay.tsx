/**
 * Element/ Calculation Display
 */
import * as React from "react"
import { memo, FunctionComponent } from "react"

// Components
import { IncrementButton, Message } from "../../presentational/element"

// Types
interface Props {
  message: string
  onCalculation?: () => void
}

// Component
export const CalculationDisplay: FunctionComponent<Props> = memo(
  ({ ...props }) => {
    const { message, onCalculation } = props

    return (
      <>
        <Message text={message} />
        <IncrementButton label="世界のナベアツ" onPress={onCalculation} />
      </>
    )
  }
)
