import { mount } from 'products/ProductsIndex'
import { mount as mountCart } from 'cart/CartShow'

const productsEl = document.querySelector('#my-products')
const cartEl = document.querySelector('#my-cart')

mount(productsEl)
mountCart(cartEl)