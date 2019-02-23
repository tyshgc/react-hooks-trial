/**
 * presentational/
 * Message
 *
 * @text string
 */

import * as React from "react"
import { memo, FunctionComponent } from "react"
import styled from "styled-components"

// Types
interface Props {
  text?: string
}

// Component
export const Message: FunctionComponent<Props> = memo(({ ...props }) => {
  return <StyledMessage>{props.text || "..."}</StyledMessage>
})

const StyledMessage = styled.p``
