export default {
    beforeRouteEnter (to, from, next) {
        next(() => {
            if(to.meta.title){
                document.title = to.meta.title;
            }
            if(to.meta.desc){
                document.querySelector("meta[name='description']").setAttribute('content', to.meta.desc)
            }
        })
    }
}