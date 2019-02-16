/**
 * presentational/
 * Message
 *
 * @text string
 */

import * as React from "react"
import { FunctionComponent } from "react"
import styled from "styled-components"

// Types
interface Props {
  text?: string
}

// Component
const Message: FunctionComponent<Props> = (props: Props) => {
  return <StyledMessage>{props.text || "..."}</StyledMessage>
}

const StyledMessage = styled.text``

export default Message
