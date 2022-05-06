
import { useEffect, useMemo, useState } from 'react'
import * as API from '../services/matchesAPI'
import "./index.css";
const classNames = require('classnames');

export const FootballMatchesData = () =>{
  const [selectedYear, setSelectecYear ] = useState(null)
  const [dbmatches, setDbmatches] = useState({})
  const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017]
  const  setYear = (year) => {
    setSelectecYear(year)
    if(dbmatches[year] == undefined){
      API.getMatchesByYear(year).then(result=>{
        if(result.data.length !== 0){
          const copy = JSON.stringify(dbmatches)
          const aux = JSON.parse(copy)
          aux[year] = result
          setDbmatches(aux)
        }
      })
    }  
  }
  
  let filtered = []
  filtered = useMemo(()=>{
    if(dbmatches[selectedYear] === undefined)
      return []
    else
      return [...dbmatches[selectedYear].data]
  }, [selectedYear])

  return(
    <div className="layout-row">
    <div className="section-title">Select Year</div>
    <ul className="sidebar" data-testid="year-list">
      {years.map((year) => {
        return (
          <li className={
            classNames({
              'sidebar-item': true,
              'active': selectedYear === year
            })
          }
          onClick={()=> setYear(year)}
          key={year}>
            <a>{year}</a>
          </li>
        )
      })}
    </ul>

    <section className="content">
     
      <section>
        <div className="total-matches" data-testid="total-matches"></div>
        <ul className='mr-20 matches styled'  data-testid="match-list">

        {filtered.length === 0 
        ? (<div data-testid="no-result" className="slide-up-fade-in no-result">
        { "No matches found" }
      </div>)
      : 
      
      filtered.map(e=>{
       return (<li> Match {e.name} won by {e.winner} </li>)
      }) 
      }  
      </ul>
      <p> Total Matches {filtered.length} </p>
      </section>

      
    </section>
  </div>
  )
  }
 
