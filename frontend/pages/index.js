import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

import { API_URL } from '../utils/urls';

const IndexPage = ({products}) => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1OLD.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>1DROP is out now!</h3>
              <a href="#" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/front2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Level up your style</h3>
              <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-2OLD.jpg'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Our gang</h3>
              <a href="#" className="btn btn--rounded">MEET US</a>
            </div>
          </article>
        </div>
      </section>

      <ProductsFeatured products={products} />

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>BECOME A PART OF RINNEOR GANG</h4>
          </header>
        </div>
      </section>

      <Subscribe />
      
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const products_res = await fetch(`${API_URL}/products`);
    const products = await products_res.json();

    return {
        props: {
            products: products
        }
    };
}

export default IndexPage