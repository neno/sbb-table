import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Button from "../index"
import { buttonData } from "./button.data"

export default {
  title: "01-Atoms/Buttons"
}

export const Default = () =>
  renderToStaticMarkup(<Button label={buttonData.label} />)
