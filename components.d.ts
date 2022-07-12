declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        // RouterLink와 RouterView가 type checking 안 되어서 빨갛게 보여서 이렇게 처리해주는 것
        RouterLink: typeof import('vue-router')['RouterLink']
        RouterView: typeof import('vue-router')['RouterView']
    }
}

export {

}
