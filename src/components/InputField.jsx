import React from "react"
import { Input } from "antd"

const InputField = ({ searchTerm, handleSearchTerm }) => {
  return (
    <Input
      placeholder="Search for a Country"
      onChange={handleSearchTerm}
      value={searchTerm}
    />
  )
}

export default InputField
