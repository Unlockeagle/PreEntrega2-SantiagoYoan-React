import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import ButtonComponent from "../navigation/ButtonComponent";

export default function ProdDetail() {
  const [products, setProducts] = useState({});
  const { prodId } = useParams();
  const [count, setcount] = useState(0);




  useEffect(() => {
    setProducts(getProduct(prodId));
  }, []);

  return (
    <>
      <h2 className="text-4xl mt-24 font-semibold text-center">Product Details</h2>
      <section className="flex justify-center m-auto text-gray-700 bg-white shadow-md rounded-xl w-96 h-[36rem] mt-4">
        <div className="flex justify-center flex-col gap-2 w-[100%]">
          <p> ID: {prodId}</p>
          <div className="mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl h-62">
            <img
              className="object-cover w-full h-full"
              src={products.image}
              alt="card-Img"
            />
          </div>
          <div className=" flex justify-between mx-4">
            <p className="font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {products.title}
            </p>
            <p className=" font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Price: {products.price}
            </p>
          </div>
          <p className=" font-sans text-left mx-4 mb-2 text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {products.description}
          </p>
          <div className=" flex justify-center gap-4 p-4 pt-0">
            <div className="flex gap-4">
              <button onClick={() => {count > 0 && setcount(count -1);}} className="btn btn-outline btn-sm">-</button>
              <p>{count}</p>
              <button onClick={() => {count < products.stock && setcount(count +1)}} className="btn btn-outline btn-sm">+</button>
            </div>
            <ButtonComponent title={"Comprar"} />
          </div>
          <span className="py-1 bg-gray-100 rounded-b-xl text-center">
            Stock Disponible: {products.stock}
          </span>
        </div>
      </section>
    </>
  );
}
