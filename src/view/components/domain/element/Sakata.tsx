/**
 * Sakata
 */
import * as React from "react"
import { memo } from "react"
import styled from "styled-components"

// Types
interface Props {
  top: number
  left: number
}

// Component
export const Sakata = memo((props: Props) => (
  <StyledSakata top={props.top || -999} left={props.left || -999} />
))

const StyledSakata = styled.div`
  background-color: #000;
  background-image: url(//pbs.twimg.com/profile_images/645810145017008129/VQGVQfGn.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 50%;
  width: 100px;
  height: 100px;
  border-radius: 999px;
  position: absolute;
  top: ${(props: Props) => `${props.top}px` || "50%"};
  left: ${(props: Props) => `${props.left}px` || "50%"};
`
