import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Produc() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,99</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          molestias fuga rem aut, iure numquam! Sint error corrupti ipsum,
          tempora iure asperiores doloribus culpa itaque, autem placeat optio
          eum recusandae?
        </p>

        <button>Comprar</button>
      </ProductDetails>
    </ProductContainer>
  )
}
