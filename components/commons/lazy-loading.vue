<template>
    <div ref="trigger">
       <slot :name="`LazyLoad`" />     
    </div>    
</template>

<script>
    export default {        
        data() {
            return {
                observer: null
            }
        },
        mounted() {
            this.observer = new IntersectionObserver( entries => {
                this.handleIntersect(entries[0])
            }, this.options)
            this.observer.observe(this.$refs.trigger)
        },
        destroyed() {
            this.observer.disconnect()
        },
        methods: {
            handleIntersect(entry) {
                if (entry.isIntersecting) this.$emit("triggerIntersected", entry)
            }
        }
    }
</script>