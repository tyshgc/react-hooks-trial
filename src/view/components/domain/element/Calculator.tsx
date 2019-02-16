/**
 * Element/
 * Calculator
 */
import * as React from "react"
import { useState, FunctionComponent } from "react"

// Components
import { IncrementButton, Message } from "../../presentational/element"

// Types
interface Props {}

const Calculator: FunctionComponent<Props> = (props: Props) => {
  //Hooks
  const [count, setCountUp] = useState(0)
  const countUpMessage =
    count > 0 ? `数が増えるだけだ… ${count}` : `まだゼロのまま`

  return (
    <>
      <Message text={countUpMessage} />
      <IncrementButton
        onPress={() => {
          setCountUp(count + 1)
        }}
      />
    </>
  )
}

export default Calculator
