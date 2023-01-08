import producto from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(producto)
          }, 500)
        })
      }

      export const pedirItem = (id) =>{
        return new Promise((resolve, reject) =>{
          setTimeout(() =>{
            const item = producto.find((el)=> el.id === id)

            if (item) {
              resolve(item)
            } else{
              reject({
                error: 'No se encontro ese producto'
              })
            }
          },1000 )
        })

      }