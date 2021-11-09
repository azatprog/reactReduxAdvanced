import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

    const DUMMY_PRODUCTS = [
        { id: 'p1', price: 6, quantity: 1, totalPrice: 6, title: 'My first book', description: 'My first book I ever wrote' },
        { id: 'p2', price: 12, quantity: 1, totalPrice: 12, title: 'My second book', description: 'My second book I ever wrote' },
    ];

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(product => (
                    <ProductItem key={product.id} item={product} />
                ))}
            </ul>
        </section>
    );
};

export default Products;
