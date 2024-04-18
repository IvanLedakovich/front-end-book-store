import { IProduct } from '@/interfaces/product.inteface'
import { convertPrice } from '@/utils/convertPrice'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import FavoriteButton from './FavoriteButton'
import { ProductRating } from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div className="bg-white rounded-xl relative overflow-hidden">
				<div className="absolute top-1 right-1 z-10">
					<FavoriteButton productId={product.id} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={250}
						height={250}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className="mt-2 font-semibold">{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className="text-aqua text-xs mb-2"
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<div className="text-2xl font-semibold">
				{convertPrice(product.price)}
			</div>
		</div>
	)
}

export default ProductItem
