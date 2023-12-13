import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import Navi from './Navi'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Router>
              <Routes>
                <Route exact path="/" element={<ProductList/>} />  
                <Route exact path="/products" element={<ProductList />} />
                <Route path="/products/:title" element={<ProductDetail />} />
                <Route path="/cart" element={<CartDetail />} />
              </Routes>
            </Router>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
