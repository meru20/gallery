import React, { useEffect, useState } from 'react';
import instance from '../api/apiConfig';
import LipstickCards from '../components/lipstickCards';

const Homepage = () => {
    const[lipstick, setLipstick]= useState([])
    const[searchTerm,setSearchTerm]=useState('')
    const getLipsticks = async () => {
        try{
            let {data} = await instance.get('/products.json?product_type=lipstick')
            console.log('data',data)
            setLipstick(data)
        }
        catch (e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getLipsticks();
    },[])
    const foundLipstick = lipstick.filter(lp => {
     
        return (
            (lp.name + lp.category + lp.brand).toLowerCase().includes(searchTerm.toLowerCase())
        
            ) 
        })
            
  
    const handleChange= (event) => {
        setSearchTerm(event.target.value)
    }

    return(
        <div id='home-page'>
            <div className='row text-center mt-3'>
                {/**Title */}
                <div className='col'>
                    <h1 className='title'>Shades of beauty</h1>
                </div>
            </div>
            {/**Search filter */}
            <div className='row mt-5'>
                <div className='col'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='lip-search'
                      placeholder='Search for lipsticks by name, type or brand...'
                      value={searchTerm}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
        {/**cards */}
        <div className='row mt-3'>
            <div className='row'>
                {foundLipstick.map((lips,index) => {
                    return (
                        <div className='col-sm-12 col-md-3 mb-3' key={index}>
                            <LipstickCards lips={lips}/>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )

}
export default Homepage;