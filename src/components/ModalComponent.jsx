import React from "react"
import { Button, Modal } from "antd"
import { useState, useCallback } from "react"
import { useOneCountry } from "../hooks/useOneCountry"
import { useParams } from "react-router-dom"

const ModalComponent = (props) => {
  const data = useOneCountry(props.name)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <button type="primary" onClick={showModal} className="modal-btn">
        {data.country.map((country) => {
          return country.name.common
        })}
      </button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk}>
        {data.country.map((country) => {
          return (
            <div key={country.name.common}>
              <h1>{country.name.common}</h1>
              <img
                src={country.flags.png}
                alt={country.name.common}
                width={120}
              />
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
              <>Area: {country.area.toLocaleString()} km²</>
              <p>Official Name: {country.name.official}</p>
              <p>Top Level Domain: {country.tld}</p>
            </div>
          )
        })}
      </Modal>
    </>
  )
}

export default ModalComponent
