
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import clienteAxios from '../config/axios';

const DetallePlato = () => {

    const params = useParams();
    const { id } = params;
   
    const [ plato, setPlato ] = useState({});
    const [ spinner, setSpinner ] = useState(true);  

    useEffect( () =>{
        const consultarApi = async () =>{
          try {

            const { data } = await clienteAxios(`/platos/get/${id}`);  
            setPlato(data);
      
          } catch (error) {
              console.log("Error: " + error.message);
          }
        };
        consultarApi();
      }, []);   
    
      const { _id, nombre, description, precio, image} = plato

      const handelClick = () => {
        console.log("Borrar");
      };


  return (
    <main className='container mx-auto mt-10'>
        {
            spinner 
                    ?
                        <Spinner
                            spinner={Spinner}
                            setSpinner={setSpinner}
                        />
                    :
                        <>
                            <div className="flex flex-col md:flex-row">

                                {
                                    _id
                                        ?
                                        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                                            <h1 className="font-bold tracking-tight text-gray-900">{nombre}</h1>
                                            <div className="mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                                <div className="border-2 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                                        <img
                                                            src={image.url}
                                                            alt={nombre}
                                                            className="object-containt h-100 w-220 m-auto"
                                                        />
                                                </div>
                                                <p className="mt-4 text-6xl text-center text-gray-900">$ {precio}</p>
                                                <p className="mt-4 text-xxl text-justify text-gray-900"> {description}</p>
                                            </div>
                                        </div>      
                                        :

                                            <p>Cargando la informacion del producto...</p> 
                                }

                                

                            </div>  

                            <div className="p-6 align-bottom">
                                <Link
                                    className="btn bg-cyan-600 text-center text-3xl text-slate-200 font-bold"
                                    to="/"
                                >
                                    Regresa
                                </Link>

                                <Link
                                    className="btn bg-green-600 text-center text-3xl text-slate-200 font-bold"
                                    to="/"
                                >
                                    Editar
                                </Link>


                                <Link
                                    className="btn bg-red-600 text-center text-3xl text-slate-200 font-bold"
                                    to="#"
                                    onClick={handelClick}
                                >
                                    Eliminar
                                </Link>    


                            </div>
                        </>

        }
    </main>
  )
}

export default DetallePlato
