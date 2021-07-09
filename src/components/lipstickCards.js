import {Link, useHistory} from 'react-router-dom';

 const LipstickCards = ({lips}) => {
     const history = useHistory();
   
    return (
        <div id='lip-cards'>
            <span onClick={() => history.push (`/products/${lips.id}`)} className='card-link'>
            <div className= 'card mb-3 border-0 card-wrapper'>
            <div className=' text-center' >
               <div className='th-card-bg-img' style={{backgroundImage:`url(${lips.api_featured_image})`}}></div>
            </div>
            <div className='card-body text-center'>
                <h4 className='card-title'>{lips.name}</h4>
                <div className='faded'>
                <p className='card-text'>{lips.brand}</p>
                <p className='card-text'>Category: {lips.category}</p>
                <p className='card-title'>Price ${lips.price}</p>
                </div>
            </div>
      
            
        </div>
        </span>

        </div>
        
    )
}
export default LipstickCards;