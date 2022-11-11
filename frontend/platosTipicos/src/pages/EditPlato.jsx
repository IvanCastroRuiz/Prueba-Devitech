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

    useEffect( () =>{
        const consultarApi = async () =>{
          try {

            const { data } = await clienteAxios(`/platos/get/${id}`);  
            setPlato(data);
            <Navigate to="/"></Navigate>
      
          } catch (error) {
              console.log("Error: " + error.message);
          }
        };
        consultarApi();
      }, []);     

  return (
    <div>
       {
          spinner
                    ?
                        <Spinner
                            spinner={spinner}
                            setSpinner={setSpinner}
                        />
                    :  
                        <p>Formulario de edicion</p>
       }
    </div>
  )
}

export default EditPlato
