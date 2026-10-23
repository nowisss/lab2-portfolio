<script>
export default {
 name:'ProjectCard',
 props:{project:{type:Object,required:true,validator:value=>['id','title','description','imageUrl'].every(key=>key in value)}}
}
</script>
<template><article class="card"><div class="imagewrap"><img :src="project.imageUrl" :alt="`Иллюстрация проекта ${project.title}`"><span>↗</span></div><div class="meta"><span>{{project.category}}</span><span>{{project.year}}</span></div><h3>{{project.title}}</h3><p>{{project.description}}</p><div class="tags"><span v-for="tag in project.tags" :key="tag">{{tag}}</span></div></article></template>
<style scoped>
.card{min-width:0}.imagewrap{position:relative;overflow:hidden;border-radius:15px;aspect-ratio:1.48;background:#e8edf4}.imagewrap img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s}.card:hover .imagewrap img{transform:scale(1.03)}.imagewrap>span{position:absolute;right:12px;top:12px;background:white;border-radius:50%;width:32px;height:32px;display:grid;place-items:center}.meta{display:flex;justify-content:space-between;margin-top:15px;color:#8792a2;font-size:10px;text-transform:uppercase;letter-spacing:.08em}.card h3{font-size:18px;letter-spacing:-.03em;margin:9px 0}.card p{font-size:12px;color:#6c7788;line-height:1.7;margin:0}.tags{display:flex;gap:7px;flex-wrap:wrap;margin-top:13px}.tags span{padding:5px 8px;border-radius:6px;background:#eef2f7;color:#586578;font-size:10px}
</style>