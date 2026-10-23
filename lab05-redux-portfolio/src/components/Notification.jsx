import { useDispatch,useSelector } from 'react-redux'
import { resetSubmission } from '../store/contactSlice'
const messages={
 idle:null,
 loading:{title:'Отправляем заявку…',text:'Пожалуйста, подождите.',tone:'loading'},
 success:{title:'Готово!',text:'Заявка успешно отправлена.',tone:'success'},
 error:{title:'Не удалось отправить',text:'Попробуйте ещё раз позже.',tone:'error'}
}
export default function Notification(){
 const dispatch=useDispatch()
 const {status,message}=useSelector(state=>state.contact)
 const notice=messages[status]
 if(!notice)return null
 return <div className={`notice notice--${notice.tone}`} role="status" aria-live="polite">
  <span className="notice-icon">{status==='loading'?'◌':status==='success'?'✓':'!'}</span>
  <div><strong>{notice.title}</strong><p>{message||notice.text}</p></div>
  {status!=='loading'&&<button className="close" type="button" onClick={()=>dispatch(resetSubmission())} aria-label="Закрыть уведомление">×</button>}
 </div>
}