import React from 'react'
import ProductList from '../components/ProductList'
import withData from '../lib/apollo'

interface IShopProps {}

export default withData((props) => {
  return (
    <React.Fragment>
      <ProductList />
    </React.Fragment>
  )
})
