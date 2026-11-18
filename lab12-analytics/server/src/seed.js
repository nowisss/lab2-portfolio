import 'dotenv/config';import mongoose from'mongoose';import Project from'./models/Project.js';
await mongoose.connect(process.env.MONGODB_URI);
await Project.deleteMany({});
await Project.insertMany([
{title:'FinFlow',category:'Web app',budget:2400,status:'completed'},
{title:'MonoStore',category:'E-commerce',budget:3200,status:'in-progress'},
{title:'Northline',category:'Corporate',budget:1800,status:'completed'},
{title:'Studio site',category:'Corporate',budget:1200,status:'planned'},
{title:'Analytics UI',category:'Web app',budget:2100,status:'in-progress'}
]);
console.log('Seeded 5 sample projects');await mongoose.disconnect();