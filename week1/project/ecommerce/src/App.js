import './App.css';
import categories from './fake-data/all-categories';
import products from './fake-data/all-products';

function App() {
  return (
    <>
    <h1>Products</h1>
    <div class="categories">
      {categories.map(category => (
        <div class="categories--item" key={category}>
          {category}
        </div>
      ))}
    </div><ul class="products">
        {products.map(product => (
          <li class="products--item" key={product.id}>
            <div class="product">
              <img class="product--image" alt={product.id} src={product.image}></img>
              <span class="product--title">{product.title}</span>
            </div>
          </li>
        ))}
      </ul></>
  );
}

export default App;
