import { MountableElement, render } from 'solid-js/web'
import AddToCart from './AddToCart'

export default function placeAddToCart(el: MountableElement, id: number) {
  render(() => <AddToCart id={id} />, el)
}
