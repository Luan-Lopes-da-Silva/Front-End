import { Component } from "./Component.js"
import {Label} from "./Label.js"
import {Input} from "./Input.js"
import {Form} from "./Form.js"

const title = new Component('h1','main',{textContent:'Ola'})
title.render()
title.tag = 'h3'
title.build().render()

const form = new Form('main')
const label = new Label('Nome:',form, {htmlFor:'nameInput'})
const input = new Input(form,{id:'nameInput',name:'nameInput'})
form.render()
form.addChild(
  new Component('br'),
  new Component('br'),
  new Label('Data de nascimento:',form,{htmlFor:'birthDayInput'}),
  new Input (form,{id:'birthdayInput',name:'birthdayInput',type:'date'}),
  input
  )