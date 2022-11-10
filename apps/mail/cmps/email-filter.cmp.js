export default {
    template: `
      <!-- <section class="email-filter">
            <input @input="$emit('filtered', filterBy)" type="search" v-modal="filterBy.txt" placeholder="Search">
            <select v-model="filterBy.status" @change="$emit('filtered',filterBy)">
                <option v-for="opt in options" :value="opt">{{ opt.replace(opt[0],opt[0].toUpperCase() )}}
                </option>
            </select>   
        </section> -->
      `,
    data() {
        return {
            filterBy: { txt: '', status: 'all' },
            options: ['all', 'read', 'unread', 'unstarred', 'starred'],

        }
    },
    methods: {

    },
    computed: {},
}
