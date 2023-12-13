import axios from "axios";

export default class ProductService {
    getProducts() {
        return axios.get ("https://fakestoreapi.com/products")
    }

    getByTitle(title) {
        return axios.get ("https://fakestoreapi.com/products/" + title)
    }
} 