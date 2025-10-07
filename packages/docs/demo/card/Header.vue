<template>
    <div style="width:300px">       
      <le-card>
        <template #header>
            <span style="color: #409EFF;font-weight: bold;">自定义Header</span>
        </template>
        <template #header-extra>
            <le-button size="small" round @click="$emit('click', $event)">修改</le-button>
        </template>
        这是一个使用 header 插槽的卡片
        <template #footer>
            <p>
                <le-button size="small" icon="search" circle />
                <le-button size="small" icon="edit" circle />
                <le-button size="small" icon="check" circle />
                <le-button size="small" icon="link" circle />
                <le-button size="small" icon="message" circle />
            </p>
        </template>
      </le-card>
    </div>
</template>