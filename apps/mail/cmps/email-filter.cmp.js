export default {
    template: `
    <section class="email-filter flex align-center">
        <div class="email-filter-by flex align-center">
            <div class="search-container">
                <input @input="$emit('filtered',filterBy)" type="search" v-model="filterBy.txt" placeholder="Search mail"><span class="fa-solid fa-magnifying-glass email-search-icon"></span>
            </div>
            <select v-model="filterBy.condition" @change="$emit('filtered',filterBy)">
            <option v-for="(opt,i) in options" :key="i" :value="opt">{{opt.replace(opt[0], opt[0].toUpperCase())}}</option>
            </select>
        </div>
        <div class="email-sort-by flex align-center justify-center">
            <span @click="setSort"><i  class="fa fa-clock-o"></i>Date</span>
            <span  @click="setSort"><i class="fa fa-sort"></i>Title</span>
        </div>
    </section>
      `,
    data() {
        return {
            statusSortBy: '',
            filterBy: { txt: '', condition: 'all' },
            options: ['all', 'read', 'unread', 'starred', 'unstarred'],

        }
    },
    methods: {
        setSort(ev) {
            this.statusSortBy = ev.target.textContent.toLowerCase()
            this.$emit('setSort', this.statusSortBy)
        }

    },
    computed: {},
}
