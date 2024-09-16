import Header from "../_components/header"
import Search from "../_components/search"
import BarberShopItem from "../_components/barbershop-item"
import {
  BarbershopsPageProps,
  getBarbershopsBySearchParams,
} from "../_data/get-barbershops-by-searchparams"

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const barbershops = await getBarbershopsBySearchParams({ searchParams })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams?.title || searchParams?.service}
          &quot;
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopsPage
