import React from "react"
import product from "../product"

const Image = () => {
  return (
    <img
      src={product.image || "/placeholder.svg"}
      alt={product.name}
      className="img-fluid rounded"
      style={{ width: "100%", height: "300px", objectFit: "cover" }}
    />
  )
}

export default Image

