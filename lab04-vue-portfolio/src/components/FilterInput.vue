<script>
export default {
 name:'FilterInput',
 props:{ modelValue:{type:String,required:true} },
 emits:['update:modelValue'],
 methods:{ updateValue(event){ this.$emit('update:modelValue',event.target.value) } }
}
</script>
<template><label class="search"><span>⌕</span><input type="search" :value="modelValue" @input="updateValue" placeholder="Поиск по проектам..." aria-label="Поиск по проектам"><small>⌘ K</small></label></template>
<style scoped>
.search{display:flex;align-items:center;gap:10px;width:min(100%,350px);padding:11px 13px;border:1px solid #dfe4eb;border-radius:11px;background:white;color:#64748b}.search>span{font-size:22px}.search input{flex:1;min-width:0;border:0;outline:0;background:transparent;font:inherit;font-size:12px;color:#17263d}.search small{border:1px solid #e5e9ef;border-radius:5px;padding:3px 5px;font-size:10px}
</style>