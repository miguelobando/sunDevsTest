import { useEffect, useState } from 'react'
import * as API from '../services/matchesAPI'

export default function useMatches (year) {
    const [matchesByYear, setMatchesByYear] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(()=>{
       if(!matchesByYear.find(e => e === year) 
       && year !== null){
           API.getMatchesByYear(year)
           .then(result =>{
            setMatchesByYear([...matchesByYear, result]) 
           }).catch(error=>{
               setError(true)
               throw(error)
           }).finally(()=>{
               setLoading(false)
           })
       } 
    }, [year])

    return{
        matchesByYear,
        isLoading,
        error
    }
}

