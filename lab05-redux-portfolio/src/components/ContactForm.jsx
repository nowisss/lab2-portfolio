import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { submissionStarted,submissionSucceeded,submissionFailed } from '../store/contactSlice'
export default function ContactForm(){
 const dispatch=useDispatch()
 const status=useSelector(state=>state.contact.status)
 const [form,setForm]=useState({name:'',email:'',message:''})
 const loading=status==='loading'
 function updateField(event){const {name,value}=event.target;setForm(current=>({...current,[name]:value}))}
 function handleSubmit(event){
  event.preventDefault()
  dispatch(submissionStarted())
  // Демонстрационная отправка: backend не требуется по заданию.
  window.setTimeout(()=>{
   try{dispatch(submissionSucceeded());setForm({name:'',email:'',message:''})}
   catch(error){dispatch(submissionFailed('Возникла ошибка при обработке заявки.'))}
  },700)
 }
 return <form className="contact-form" onSubmit={handleSubmit}>
  <div className="form-row">
   <label>Ваше имя<input name="name" value={form.name} onChange={updateField} placeholder="Например, Анна" autoComplete="name" minLength="2" required/></label>
   <label>Email<input name="email" type="email" value={form.email} onChange={updateField} placeholder="anna@example.com" autoComplete="email" required/></label>
  </div>
  <label>Расскажите о проекте<textarea name="message" value={form.message} onChange={updateField} placeholder="Коротко опишите задачу, сроки и пожелания…" rows="4" minLength="8" required/></label>
  <div className="form-bottom"><p>Демонстрационная форма обратной связи без подключения сервера.</p><button className="submit" type="submit" disabled={loading}>{loading?'Отправка…':'Отправить заявку'} <span>↗</span></button></div>
 </form>
}