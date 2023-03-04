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
      <Modal
        title="Country Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {data.country.map((country) => {
          return (
            <div key={country.name.common} className="modal-content">
              <h1>{country.name.common}</h1>
              <img
                src={country.flags.png}
                alt={country.name.common}
                width={150}
              />
              <p>
                <strong>Capital:</strong> <span> {country.capital}</span>
              </p>
              <p>
                <strong>Population:</strong>
                <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                <strong>Region:</strong>
                <span> {country.region}</span>
              </p>
              <p>
                <strong>Subregion:</strong>
                <span>{country.subregion}</span>
              </p>
              <p>
                <strong>Area:</strong>
                <span>{country.area.toLocaleString()} km²</span>
              </p>
              <p>
                <strong>Official Name:</strong>
                <span>{country.name.official}</span>
              </p>
              <p>
                <strong>Top Level Domain:</strong>
                <span>{country.tld}</span>
              </p>
            </div>
          )
        })}
      </Modal>
    </>
  )
}

export default ModalComponent
