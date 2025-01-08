import React, { useState } from 'react'
import { ProductType } from '../App'



const ProductCard = (product:ProductType) => {
    const [Product, SetProduct] = useState<ProductType>(product)
  return (
    <div>
        {Product.name}
        {Product.id}
        {Product.price}
        {Product.image}
        {Product.category}
    </div>
  )
}

export default ProductCard