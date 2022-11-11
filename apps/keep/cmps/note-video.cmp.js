export default {
    props:['note'],
    template:`
        <section>
        <iframe class="video-frame radius" width="100%" height="50%"
        :src="url()" >
            </iframe>
        </section>
        `,
        methods:{
            url(){
                let idx = this.note.info.url.indexOf('=')
                var embedUrl = this.note.info.url.slice(idx+1)
                return 'https://www.youtube.com/embed/' + embedUrl
            }
        },
}