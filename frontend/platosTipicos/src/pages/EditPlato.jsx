import { useState, useEffect } from 'react';
import { Link, useParams, Navigate  } from 'react-router-dom';
import Swal from 'sweetalert2'
import Spinner from '../components/Spinner';
import clienteAxios from '../config/axios';

const EditPlato = () => {
    const params = useParams();
    const { id } = params;
    const [ plato, setPlato ] = useState({});
    const [ spinner, setSpinner ] = useState(true);

    const [ nombreEdit, setNombreEdit ] = useState("");
    const [ descriptionEdit, setDescriptionEdit ] = useState("");
    const [ precioEdit, setPrecioEdit ] = useState("");
    const [ idPlato, setIdPlato ] = useState("");

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

    // setIdPlato(_id);
    // setNombreEdit(nombre);
    // setDescriptionEdit(description);
    // setPrecioEdit(precio);


  return (
    <main className='container mx-auto mt-10'>
       {
          spinner
                    ?
                        <Spinner
                            spinner={spinner}
                            setSpinner={setSpinner}
                        />
                    :  
                      <>
                        <div className="flex flex-col md:flex-row">
                          {
                            _id 
                                  ?

                                    <div id="center">
                                        <section id="content" className='p-5 m-auto h-full'>
                                            <h2 className="text-gray-400 font-black text-6xl text-center">Editar {" "}<span className="text-black">Articulos</span></h2>
                                            <form className="mid-form my-5 lg:w-4/6 mx-auto shadow-xl border rounded-lg p-5">

                                                
                                                <div className="form-group mt-2">  
                                                          <div >
                                                            <img
                                                                src={image.url}
                                                                alt={nombre}
                                                                className="object-containt md:h-64 m-auto rounded-md"
                                                            />
                                                          </div>
                                                </div>


                                                <div className="form-group mt-2">
                                                    <label htmlFor="title" className='font-medium text-xl block'>Titulo</label>
                                                    <input type="text" name="title" className='flex w-full border p-2 focus:outline-none placeholder:text-gray-300 text-xl' placeholder='Titulo' />
                                                </div>
                                                <div className="form-group mt-4">
                                                    <label htmlFor="content" className="font-medium text-xl block">Contenido</label>
                                                    <textarea name="content" className='w-full border p-2 focus:outline-none placeholder:text-gray-300 h-52 text-xl' placeholder='Contenido'></textarea>
                                                </div>
                                                <div className="form-group mt-4">
                                                    <label htmlFor="content" className="font-medium text-xl block">Precio</label>
                                                    <div className='flex items-center'>
                                                        <span className='font-bold text-2xl mr-2'>$</span> 
                                                        <input name="content" type="number" className='w-full border p-2 focus:outline-none placeholder:text-gray-300 text-xl' placeholder='100.00'></input>
                                                    </div>
                                                </div>
                                                <div className="form-group mt-4">
                                                    <label htmlFor="file0" className='font-medium text-xl block '>Imagen</label>
                                                    <input type="file" name="file0" className='text-gray-400' />
                                                </div>
                                                <div className="form-group mt-4 flex justify-center">
                                                    <input type="submit" value="Guardar" className="bg-green-900 text-white mt-4 p-2 uppercase rounded hover:cursor-pointer hover:bg-green-700 transition-colors" />
                                                </div>
                                            </form>
                                        </section>
                                    </div>
                                      // <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                                      //   <div className="mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                      //         <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80 flex align-middle">
                                      //                 <img
                                      //                     src={image.url}
                                      //                     alt={nombre}
                                      //                     className="object-containt md:h-64 m-auto rounded-md"
                                      //                 />
                                      //         </div>
                                      //     </div>
                                      // </div>  
                                  :
                                    <p>Procesando</p>
                          }
                        </div>  
                      </>
       }
    </main>
  )
}

export default EditPlato
