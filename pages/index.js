import Main from '../lib/layout'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import ProductList from '../components/ProductList'
import withData from '../lib/apollo'

export default withData((props) => {
  return (
    <Main>
      <Header />
      <Submit />
      <PostList />
      <ProductList />
    </Main>
  )
})
