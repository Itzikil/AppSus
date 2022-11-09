export default {
    props:['note'],
    template:`
        <section>
            <p>{{note.info.label}}</p>
            <ul>
                <li v-for="todo in note.info.todos">
                    <p>{{todo.txt}}</p>
                    <p>time: {{todo.doneAt}}</p>
                </li>
            </ul>
        </section>
        `
}