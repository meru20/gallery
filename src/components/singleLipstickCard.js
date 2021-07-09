import {Link } from 'react-router-dom';
const SingleLipstickCard = ({lip}) => {
    console.log('sing',lip)
    return (
        <div className='row'>
            {lip? (
                <div className='card mb-3 mt-5  '>
                <div className='row no-gutters'>
                 <div className='col-md-4'>
                    <div className='th-sing-card-bg-img' style={{backgroundImage:`url(${lip.api_featured_image})`}}>
                    </div>
                </div>
                <div className='col-md-8'>
                <div className="card-body  mt-4">
                    <div className="text-center">
                    <h3 className='card-title'>  {lip.brand} </h3>
                    <h5 className='card-text'>{lip.name}</h5>
                    <h6 className='card-text'>Price: ${lip.price}</h6>
                    <hr/>
                    <p className='card-text'>{lip.description}</p>
                    </div>
                    <p className='mt-3'>Tags:</p>
                    <ul>
                        {lip.tag_list?.map((t,i) => {
                            return (
                                <li className='marker' key={i}>{t}</li>
    
                            )
                        })}
                        
                    </ul>
                </div>
                <a target="_blank" className="buy-button" href={lip.product_link}>Buy Now</a>
                    
                </div>
                </div>
                
    
            </div>

            ):(
                <h2> Sorry <Link  to={`/`}>click here</Link> to select one!</h2>
            )}
        
        </div>
    )
}

export default SingleLipstickCard;