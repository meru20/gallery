import React, { useEffect, useState } from 'react';
import instance from '../api/apiConfig';

const Homepage = () => {
    const[artworks, setArtworks]= useState([])
    const getArtworks = async () => {
        try{
            let {data} = await instance.get('/artworks')
            console.log('data', data)
        }
        catch (e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getArtworks();
    })
    return(
        <div id='home-page'>
            <div className='row text-center mt-3'>
                {/**Title */}
            </div>
        </div>
    )

}