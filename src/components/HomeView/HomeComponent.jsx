import { useEffect, useState } from "react"
import ItemCard from "../ListContainer/ItemCard";
import { getProducts } from "../../asyncMock";
import CategoryMenComponent from "../CategoryMen/CategoryMenComponent";
import CategoryWomenComponent from "../CategoryWomen/CatgoryWomenComponent";
import CategoryShoseComponent from "../CategoryShose/CategoryShoseComponent";

export default function HomeComponent(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data))
    }, []);
    console.log(products);
    return (<>

    <section className="px-20 mt-24">
        <h2 className="text-4xl mt-4 font-semibold text-center">Home</h2>

        <section className="flex flex-wrap grow-1 justify-center gap-6 px-12 py-6">
          {products.map((el) => (
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
        <section>
          <CategoryMenComponent />
          <CategoryWomenComponent/>
          <CategoryShoseComponent/>
        </section>
      </section>
        
    </>)
}