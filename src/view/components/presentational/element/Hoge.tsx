/**
 * presentational/
 * Hoge
 *
 * @message string
 */

import * as React from "react"
import { useState } from "react"
import { Button } from "@smooth-ui/core-sc"

// Types
interface Props {
  message?: string
}

// Component
const Hoge = (props: Props) => {
  return <Button size="lg">Push</Button>
}

export default Hoge
