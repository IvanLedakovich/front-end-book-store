import { IProduct } from '@/types/product.inteface'
import Image from 'next/image'
import { FC } from 'react'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div>
				<FavoriteButton productId={product.id} />
				<Image
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
				/>
			</div>
			<h3>{product.name}</h3>
			<div>{product.category.name}</div>
			<ProductRating rating={product.rating} />
			<div>{product.price}</div>
		</div>
	)
}

export default ProductItem
