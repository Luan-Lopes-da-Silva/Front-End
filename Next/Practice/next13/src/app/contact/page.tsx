import { Metadata } from "next"
import Head from "next/head"

export const metadata:Metadata = {
title:'Contact',
icons:'/favicon.ico'
}

export default function Contact(){ 
 return(
<>
  <link rel="icon" href="./favicon.ico" sizes="any" />
  <h1>Contact</h1>
  <h2>Bellow</h2>
</> 
 ) 
}