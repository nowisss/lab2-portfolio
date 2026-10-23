import { createSlice } from '@reduxjs/toolkit'
const contactSlice=createSlice({
 name:'contact',
 initialState:{status:'idle',message:''},
 reducers:{
  submissionStarted(state){state.status='loading';state.message=''},
  submissionSucceeded(state){state.status='success';state.message='Заявка отправлена. Я свяжусь с вами в ближайшее время.'},
  submissionFailed(state,action){state.status='error';state.message=action.payload||'Не удалось отправить заявку. Попробуйте ещё раз.'},
  resetSubmission(state){state.status='idle';state.message=''}
 }
})
export const {submissionStarted,submissionSucceeded,submissionFailed,resetSubmission}=contactSlice.actions
export default contactSlice.reducer