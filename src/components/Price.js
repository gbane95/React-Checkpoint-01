import React from "react"
import product from "../product"

const Price = () => {
  return <p className="text-success font-weight-bold h4">{product.price.toFixed(3)} Fcfa</p>
}

export default Price

