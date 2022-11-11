import { Link } from 'react-router-dom';

const Plato = ({plato}) => {

    const { _id, nombre, precio, image, description  } = plato;


    console.log(_id, nombre, precio, image, description);


  return (
    <div key={_id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
                src={image.url}
                alt={nombre}
                className="object-containt h-100 w-220 m-auto"
            />
       </div>

       <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-xl text-gray-900">
                <Link 
                    to={`/admin/detalle-articulo/${_id}`}
                >
                    <span aria-hidden="true" className="absolute inset-0" />
                    {nombre}
                </Link>
                </h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
            </div>
            <p className="text-xl text-gray-900 font-bold">${precio}</p>
        </div>
        

        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                <button
                    classNames='text-gray-300 hover:bg-gray-700 hover:text-white'
                >
                    Editar
                </button>
            </div>    
        </div>   
    </div>
  )
}

export default Plato
