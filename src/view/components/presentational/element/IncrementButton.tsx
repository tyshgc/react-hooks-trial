/**
 * presentational/
 * IncrementButton
 *
 * @label string
 */

import * as React from "react"
import { FunctionComponent } from "react"
import { Button } from "@smooth-ui/core-sc"

// Types
interface Props {
  label?: string
  onPress?: () => void
}

// Component
export const IncrementButton: FunctionComponent<Props> = ({ ...props }) => {
  const { label, onPress } = props

  const onClickEvent = () => {
    if (!onPress) return
    onPress()
  }

  // render
  return (
    <Button size="lg" onClick={onClickEvent}>
      {label || "Increment!"}
    </Button>
  )
}
