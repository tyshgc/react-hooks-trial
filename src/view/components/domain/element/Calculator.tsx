/**
 * Element/
 * Calculator
 */
import * as React from "react"
import { useState, FunctionComponent } from "react"
import styled from "styled-components"

// Components
import { IncrementButton, Message } from "../../presentational/element"

// Types
interface Props {}

// Component
const Calculator: FunctionComponent<Props> = (props: Props) => {
  //Hooks
  const [count, setCountUp] = useState(0)
  const countUpMessage =
    count > 0 ? `${count}!` : `3の倍数の時だけアホになります！`

  const MrWatanabeMessage = () => {
    const isThree = `${count}`.match(/3/) || []
    if (count === 0) return
    if (count % 3 !== 0 && isThree.length === 0) return

    const randomTopPosition = Math.random() * window.innerHeight
    const randomLeftPosition = Math.random() * window.innerWidth

    return <StyledAho top={randomTopPosition} left={randomLeftPosition} />
  }

  return (
    <StyledWrapper>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Message text={countUpMessage} />
        </div>
        <div>
          <IncrementButton
            onPress={() => {
              setCountUp(count + 1)
            }}
          />
          {MrWatanabeMessage()}
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
`

interface StyledAhoProps {
  top: number
  left: number
}
const StyledAho = styled.div`
  background-color: #000;
  background-image: url(//pbs.twimg.com/profile_images/645810145017008129/VQGVQfGn.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 50%;
  width: 100px;
  height: 100px;
  border-radius: 999px;
  position: absolute;
  top: ${(props: StyledAhoProps) => `${props.top}px` || "50%"};
  left: ${(props: StyledAhoProps) => `${props.left}px` || "50%"};
`

export default Calculator
