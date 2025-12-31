import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import{styled} from 'styled-components'


const Maintag = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`

const Sub = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02);
  }
`

const Title = styled.h2`
  color: #ffffffff;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`

const Des = styled.p`
  color: #666;
  font-size: 0.9rem;
`

function Task1() {

    const [state,setState]=useState() 

    async function display(){
        const res=await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        console.log(res.data.categories);
        setState(res.data.categories)
        
    }

    useEffect(()=>{
  display()
    },[])
  
    



  return (
    <Maintag>
{state&&state.map((li)=>(
  <Link style={{textDecoration:'none'}} to={`/abcd/${li.strCategory}`}>
    <Sub>
    <Title>{li.strCategory}</Title>
    <Image src={li.strCategoryThumb} alt="" />
    <Des>{li.strCategoryDescription}</Des>
    </Sub>
    </Link> 
))}
    </Maintag>
  )
}

export default Task1
