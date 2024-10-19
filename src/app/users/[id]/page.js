// export default function UsersPage( {params} ) {

//     console.log(params)

//     return(
//         <>
//             <h1>Informacion del usuario</h1>
//             <p>Nombre: {params.name}</p>
//             <p>Apellido: {params.lastname}</p>
//             <p>Edad: {params.age}</p>
//             <p>Descripcion: {params.description}</p>
//         </>
//     )
// }
'use client';
import { useSearchParams } from 'next/navigation';

export default function UsersPage({ params }) {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
    const lastname = searchParams.get('lastname');
    const age = searchParams.get('age');
    const description = searchParams.get('description');

  // ... obtener los demás parámetros

  return ( 
    // ... mostrar los datos
    <>
        <h1>Informacion del usuario</h1>
        <p>Nombre: {name}</p>
        <p>Apellido: {lastname}</p>
        <p>Edad: {age}</p>
        <p>Descripcion: {description}</p>
    </>
  );
}