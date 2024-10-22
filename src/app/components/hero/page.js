import { getHomeInfo } from '@/lib/get-home-info';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default async function Hero(){
    

    const { title , description , image } = await getHomeInfo();

    return(
        <div className='h-2/3 min-h-96 flex flex-col justify-center p-4' style={{ 
            backgroundImage: `url(${image})`, 
            backgroundSize: 'contain', // Ajusta según tus necesidades
            backgroundPosition: 'center', // Ajusta según tus necesidades
            backgroundRepeat: 'no-repeat', // Ajusta según tus necesidades
          }}>
            <div>
              <h1 className="text-2xl text-white">{title}</h1>
              <div className='text-slate-50'>
                <BlocksRenderer content={description} />
              </div>
            </div>
              
          </div>
    )
}



