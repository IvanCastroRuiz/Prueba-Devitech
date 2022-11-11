import React from 'react'

const CreatePlato = () => {

  

  return (
          <div id="center">
              <section id="content" className='p-5 m-auto h-full'>
                  <h2 className="text-gray-400 font-black text-6xl text-center">Crear {" "}<span className="text-black">Articulos</span></h2>
                  <form className="mid-form my-5 lg:w-4/6 mx-auto shadow-xl border rounded-lg p-5">
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
      )
}

export default CreatePlato
