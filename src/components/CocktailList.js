import React from 'react'
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
    const {Cocktail, loading} = useGlobalContext() 
    

    if(loading) {
        return <Loading />
    }

    if(Cocktail.length < 1) {
        return(
            <h2 className='section-title'>No Cocktails Matched</h2>
        )
    }
  return (
    <div>
        <h2>CocktailList</h2>
    </div>
  )
}

export default CocktailList;