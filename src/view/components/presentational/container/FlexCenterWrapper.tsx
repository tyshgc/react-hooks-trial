/**
 * Flex Center Wrapper
 * Horizontal and Vertical center position wrapper
 */
import * as React from "react"
import { StatelessComponent, Props } from "react"
import styled from "styled-components"

// Component
export const FlexCenterWrapper: StatelessComponent<Props<{}>> = ({
  children,
}) => {
  return (
    <StyledWrapper>
      <StyledFlexWrapper>{children}</StyledFlexWrapper>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
`
const StyledFlexWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
