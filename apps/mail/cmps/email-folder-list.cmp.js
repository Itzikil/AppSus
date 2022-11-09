export default {
    template: `
    <section class="email-folder-list">
      <router-link to="">
          <div class1="btn compose-btn">
              Compose
          </div>
      </router-link>
      <router-link to="">
          <div class1="btn inbox-btn">
              Inbox
          </div>
      </router-link>
      <router-link to="">
          <div class1="btn starred-btn">
              Starred
          </div>
      </router-link>
      <router-link to="">
          <div class1="btn trash-btn">
              Trash
          </div>
          <div class1="btn sent-btn">
              Sent
          </div>
          <div class1="btn draft-btn">
              Draft
          </div>
      </router-link>
    </section>
  `,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}