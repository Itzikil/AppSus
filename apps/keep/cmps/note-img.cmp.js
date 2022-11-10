export default {
    props:['note'],
    template:`
        <section>
            <p>{{note.info.txt}}</p>
            <img :src=note.info.url alt="" />
        </section>
        `
}