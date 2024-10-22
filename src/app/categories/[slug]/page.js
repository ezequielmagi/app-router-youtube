// 'use client';

// import { useParams } from 'next/navigation';



 async function getCategoryData(slug) {
   try{
        const res = await fetch(`/api/product-categories?slug=`+ slug,{ 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer b4b09b6e38c1dbdde7ffaa0f5405cea76ba26d1d430a287608e7ed62ce3cf018dbd2d0fce769a9ab08097ec684728be5c9decb4158d3d7e61b8451f879931c7832b67a7b74310121db513174133cc400fc87c4a7a622aeafeb061935fead8626ec5afed3d3be92b69b5c4dc62afaf4f053be321b0b3bbf2c16a0e3127ce952ef'
        }});
      const data = await res.json();
      console.log(data);
      return data;
   }
    catch(error){
      console.error('Error:', error);
    }
 }

 export default async function CategoryPage( { params } ) {
  //  const params = useParams();
   const slug = params.slug 
   const categoryData = await getCategoryData(slug);

  //  console.log(categoryData);

  console.log(slug);

   return (
     <div>
      <h1>Esta es la pagina de la categoria</h1>
      <p>Nombre: {categoryData.name}</p>
     </div>
 );
 }

