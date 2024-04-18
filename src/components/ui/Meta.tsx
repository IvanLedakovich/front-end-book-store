import { ISeo } from '@/interfaces/seo.interface'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

export const titleMerge = (title: string) => `${title} | Book Store`

const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	description,
	image,
	children
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={description}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:image" content={image || '/favicon.svg'} />
						{/*<meta property='og:site_name' content={siteName} /> */}
						<meta property="og:description" content={description} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
