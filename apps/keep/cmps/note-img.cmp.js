export default {
    props:['note'],
    template:`
        <section>
            <p>{{note.info.title}}</p>
            <img :src=note.info.url alt="" />
        </section>
        `
}