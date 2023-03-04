import React from "react"
import { SearchOutlined } from "@ant-design/icons"
import { Button, Input, Space, Table } from "antd"
import { useAllCountries } from "../hooks/useAllCountries"
import Highlighter from "react-highlight-words"
import { Link } from "react-router-dom"
import ModalComponent from "./ModalComponent"

const TableComponent = () => {
  const memoizedAllCountries = useAllCountries()
  const dataSource = memoizedAllCountries.countries
  const [searchText, setSearchText] = React.useState("")
  const [searchedColumn, setSearchedColumn] = React.useState("")
  const searchInput = React.useRef(null)
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }
  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText("")
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              })
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close()
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  })

  const columns = [
    {
      title: "Flag",
      dataIndex: "flag",
      key: "flag",
      responsive: ["xs"],
      render: (flag) => <img src={flag} alt="flag" width={100} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
      responsive: ["xs"],
      render: (name) => <ModalComponent name={name} />,
    },
    {
      title: "Capital",
      dataIndex: "capital",
      key: "capital",
      responsive: ["sm"],
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
      responsive: ["sm"],
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      responsive: ["sm"],
    },
  ]

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{
        position: ["bottomCenter"],
      }}
    />
  )
}

export default TableComponent
