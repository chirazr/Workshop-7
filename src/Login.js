import React from 'react'
import {useDispatch } from 'react-redux'
import {login} from './Features/user'

export default function  Login ()  {
    const dispatch = useDispatch()
  return (
    <div>
      <button
      onClick = {()=>
        dispatch( login (
        {
        email:"nom@test.tn", 
        nom:"nom",
         prenom:"prenom", 
         adress:"tunisie"}))
        }>
        se connecter ! {""}
        </button>

    </div>
  )
}


  