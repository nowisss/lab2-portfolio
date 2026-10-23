<script>
import FilterInput from './FilterInput.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
export default {
 name:'ProjectList',components:{FilterInput,ProjectCard},
 data(){return {searchQuery:'',projects}},
 computed:{
  filteredProjects(){
   const query=this.searchQuery.trim().toLocaleLowerCase('ru')
   if(!query)return this.projects
   return this.projects.filter(project=>[project.title,project.category,project.description,...project.tags].join(' ').toLocaleLowerCase('ru').includes(query))
  }
 }
}
</script>
<template>
 <div class="toolbar"><span>ПОКАЗАНО {{filteredProjects.length}} ИЗ {{projects.length}}</span><FilterInput v-model="searchQuery"/></div>
 <div v-if="filteredProjects.length" class="grid"><ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project"/></div>
 <div v-else class="empty"><h3>Ничего не найдено</h3><p>Попробуй изменить запрос.</p><button @click="searchQuery=''">Сбросить поиск</button></div>
</template>
<style scoped>
.toolbar{display:flex;align-items:center;justify-content:space-between;gap:18px;margin:25px 0}.toolbar>span{font-size:10px;letter-spacing:.12em;color:#8792a2;font-weight:700}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px 24px}.empty{text-align:center;padding:50px;border:1px dashed #d7dee8;border-radius:16px;color:#64748b}.empty h3{color:#17263d}.empty button{padding:10px 13px;border:0;border-radius:8px;background:#1c3657;color:white;cursor:pointer}@media(max-width:620px){.toolbar{align-items:flex-start;flex-direction:column}.grid{grid-template-columns:1fr}}
</style>