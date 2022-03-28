import React from "react"
import { TableWrapper } from "../elements/index"

export const Table = ({ children }) => {
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}
