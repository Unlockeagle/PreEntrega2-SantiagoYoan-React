import ButtonComponent from "../navigation/ButtonComponent";

export default function ItemCard({ stock, title, price, description, image, idProd }) {
  return (
    <>
      
        <section className="flex text-gray-700 bg-white shadow-md rounded-xl w-64">
          <div className="flex flex-col gap-2 w-[100%]">
            <div className="mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl h-48">
              <img
                className="object-cover w-full h-full"
                src={image}
                alt="card-Img"
              />
            </div>
            <div className=" flex justify-between mx-4">
              <p className="font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {title}
              </p>
              <p className=" font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {price}
              </p>
            </div>
            <p className=" font-sans text-left mx-4 mb-2 text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              {description}
            </p>
            <div className=" m-auto p-4 pt-0">
              <ButtonComponent ruta={`/product/${idProd}`} title={"Ver detalles del producto"} />
            </div>
            <span className="py-1 bg-gray-100 rounded-b-xl text-center">
              Stock Disponible: {stock}
            </span>
          </div>
        </section>
      
    </>
  );
}
