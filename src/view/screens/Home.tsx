/**
 * Home Screen
 */
import * as React from "react"

// Components
import { Calculator, SakataStage } from "../components/domain/container"
import { FlexCenterWrapper } from "../components/presentational/container"

// Screen
export const Home = () => {
  return (
    <FlexCenterWrapper>
      <Calculator />
      <SakataStage />
    </FlexCenterWrapper>
  )
}
