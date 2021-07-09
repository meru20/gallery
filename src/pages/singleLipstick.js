import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import instance from '../api/apiConfig';
import SingleLipstickCard from '../components/singleLipstickCard';

const SingleLipstick = () => {
    const [lipstick, setLipstick]= useState([])
    const [details, setDetails] = useState([])
    const { productId } = useParams('');
    const getSingleLipsticks = async () => {
        try{
            let {data} = await instance.get('/products.json?product_type=lipstick')
            let foundItem = data.find(lp => lp.id === +productId)

            console.log('datas',foundItem)
            setLipstick(foundItem)
        }
        catch (e){
            console.log(e);
        }
    }
    

    useEffect(()=> {
    getSingleLipsticks()
   
    },[productId])

  
    

    return(
        <div className='single-product'>
           
          <SingleLipstickCard lip={lipstick}/>
            
        </div>
    )
}
export default SingleLipstick;