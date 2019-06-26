import products from './../data/products';


export default class ProductService {

  static fetchProducts() {
    let formattedProds = [];
    products.forEach(p => {
      let items = ProductService.destructureProduct(p);
      formattedProds.push(items);
    });

    return ProductService.sortProducts(formattedProds);
  }

  static destructureProduct(product) {
    const {
      id, title, leadtext, vote,
      image: {src}, credit, url
    } = product;

    let result = {};
    result.id = id;
    result.title = title;
    result.leadtext = leadtext;
    result.vote = vote;
    result.image = src;
    result.credit = credit;
    result.url = url;

    return result;
  }

  static sortProducts(products) {
    products.sort((a, b) => b.vote - a.vote);
  }

}
