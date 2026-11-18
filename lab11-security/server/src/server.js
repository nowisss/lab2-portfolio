import 'dotenv/config';import express from 'express';import helmet from 'helmet';import cors from 'cors';import {body,validationResult} from 'express-validator';
const app=express();
app.use(helmet({contentSecurityPolicy:{directives:{defaultSrc:["'self'"],scriptSrc:["'self'"],styleSrc:["'self'","'unsafe-inline'"],imgSrc:["'self'","data:"],connectSrc:["'self'","http://localhost:5173"],objectSrc:["'none'"],baseUri:["'self'"],frameAncestors:["'none'"]}}}));
app.use(cors({origin:'http://localhost:5173'}));app.use(express.json({limit:'20kb'}));
const comments=[];
function escapeHtml(value=''){return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
app.get('/api/health',(req,res)=>res.json({status:'ok',securityHeaders:'Helmet enabled'}));
app.get('/api/comments',(req,res)=>res.json(comments));
app.post('/api/comments',body('text').trim().isLength({min:1,max:500}).withMessage('Текст должен содержать 1–500 символов'),(req,res)=>{const errors=validationResult(req);if(!errors.isEmpty())return res.status(400).json({errors:errors.array()});const item={id:Date.now(),text:escapeHtml(req.body.text)};comments.push(item);res.status(201).json(item);});
app.listen(process.env.PORT||4100,()=>console.log(`Security API: http://localhost:${process.env.PORT||4100}`));