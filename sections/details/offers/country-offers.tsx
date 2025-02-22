import { OfferCategory, OfferCountry } from "@/globals/types"

import CategoryOffers from "@/sections/details/offers/category-offers"

const CountryOffers = ({ countryOffers }: { countryOffers: OfferCountry }) => (
	<div className="mb-8 rounded-xl bg-white bg-opacity-5 p-12 pb-4">
		<div>
			<h2 className="mb-2 text-h2">{countryOffers.name}</h2>
			{countryOffers?.offers?.map((countryOffer: OfferCategory) => (
				<CategoryOffers
					key={countryOffer.name}
					categoryOffers={countryOffer}
				/>
			))}
		</div>
	</div>
)

export default CountryOffers
