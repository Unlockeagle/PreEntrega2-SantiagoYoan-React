import { useEffect, useState } from "react";
import ItemCard from "../ListContainer/ItemCard";
import { getProducts } from "../../asyncMock";

export default function CategoryMenComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <>
      <section className="px-20 mt-24 justify-center">
        <h2 className="text-4xl mt-4 font-semibold text-center">Men section</h2>

        <section className="flex flex-wrap justify-center gap-6 px-12 py-6">
          {products
            .filter((el) => el.category === "men")
            .map((el) => (
              <ItemCard
                key={el.id}
                title={el.title}
                price={el.price}
                description={el.description}
                image={el.image}
                stock={el.stock}
                idProd={el.id}
              />
            ))}
        </section>
      </section>
    </>
  );
}
