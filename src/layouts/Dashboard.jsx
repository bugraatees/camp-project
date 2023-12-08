import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
        <Navi/>
        <Categories />
        <ProductList />
    </div>
  )
}
