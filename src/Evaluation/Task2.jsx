import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import {styled} from 'styled-components'

const Maintag = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;

  max-width: 1800px;
  margin: 0 auto;     
`



const Sub = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  background: #1e1e1e;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;


const Title = styled.h2`
  color: #ffffffff;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 6px;
`;



function Task2() {
const c = useParams()


  const [state,setState]=useState() 

    async function display(){
        const res=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${c.foodname}`)
        console.log(res.data.meals);
        setState(res.data.meals);
        
    }

    useEffect(()=>{
  display()
    },[])
  

  return (
      <Maintag>
  {state&&state.map((li)=>(
    <Link style={{textDecoration:'none'}} to={`/xyz/${li.idMeal}`}>
      <Sub>
      <Title>{li.strMeal}</Title>
      <Image src={li.strMealThumb} alt="" />
      </Sub>
      </Link> 
  ))}
      </Maintag>
  )
}

export default Task2
