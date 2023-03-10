import { GetStaticPaths, GetStaticProps } from "next"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductsContainer } from "../../styles/pages/product"
import Image from 'next/image'
import Head from "next/head"
import { IProduct, useCartContext } from "../../contexts/cartContext"

interface ProductProps {
    product: IProduct
}

export const Product = ({ product }: ProductProps) => {


    const { AddProductToCart, checkIfItemAlreadyExistsInCart } = useCartContext()

    const itemAlreadyAddedToCart = checkIfItemAlreadyExistsInCart(product.id)

    return (
        <>
            <Head>
                <title>{`Produto ${product.name} | Ignite Shop`}</title>
            </Head>
            <ProductsContainer>
                <ImageContainer>
                    <Image
                        src={product.imageUrl}
                        width={520}
                        height={480}
                        alt="" />
                </ImageContainer>

                <ProductContainer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button
                        onClick={() => AddProductToCart(product)}
                        disabled={itemAlreadyAddedToCart}
                    >
                        {itemAlreadyAddedToCart ? 'Produto adicionado no carrinho' : 'Adicionar no carrinho'}
                    </button>


                </ProductContainer>
            </ProductsContainer>
        </>
    )
}

export default Product


export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            {
                params: { id: 'prod_MlZ0hVUa4gKJzE' }
            }
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    const productId = params?.id

    const product = await stripe.products.retrieve(productId as string, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                description: product.description,
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(price.unit_amount as number / 100),
                numberPrice: (price?.unit_amount / 100),
                defaultPriceId: price.id,

            },
            revalidate: 60 * 60 * 1
        }
    }
}