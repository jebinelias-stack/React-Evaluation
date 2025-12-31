import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {styled} from 'styled-components'
import { Link } from 'react-router'
import {useCart} from '../Context/Cartcontext'

const Maintag = styled.div`
  width: 30%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  justify-content: center;

  max-width: 1800px;
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
  color: #ffffffff;
  font-size: 0.9rem;
`
const Click = styled.button`
width:100px;
height:50px;
text-align: center;

`


function Task3() {

  const a= useParams()


  const [state,setState]=useState()
  
  const {addToCart}=useCart();

    async function display(){
        const c=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${a.id}`)
        console.log(c.data.meals);
        setState(c.data.meals)
        
    }

    useEffect(()=>{
  display()
    },[])
  
  return (
      <Maintag>
      {state&&state.map((li)=>(
          <Sub>
          <Title>{li.strMeal}</Title>
          <Image src={li.strMealThumb} alt="" />
          <button onClick={()=>addToCart(li)}>Add To Cart</button>
          <Des>{li.strArea}</Des>
          <Des>{li.strIngredient1}</Des>
          <Des>{li.strIngredient2}</Des>
          <Des>{li.strIngredient3}</Des>
          <Des>{li.strIngredient4}</Des>
          <Des>{li.strIngredient5}</Des>
          <Des>{li.strIngredient6}</Des>
          <Des>{li.strIngredient7}</Des>
          <Des>{li.strIngredient8}</Des>
          <Des>{li.strInstructions}</Des>
          </Sub>
          
        ))}
          </Maintag>
    
  )
}

export default Task3
