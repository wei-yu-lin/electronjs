<template>
  <div id="button">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">鋼捲</th>
          <th scope="col">鋼種</th>
          <th scope="col">入料重</th>
          <th scope="col">入料寬</th>
          <th scope="col">更動</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in coil.data" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <template v-if="!item.key">
          <td>{{ item.COIL_NUMBER }}</td>
          <td>{{ item.STEEL_GRADE }}</td>
          <td>{{ item.ENTRY_WEIGHT }}</td>
          <td>{{ item.ENTRY_WIDTH }}</td>
          </template>
          <template v-else>
            <td>
              <input v-model="item.COIL_NUMBER">
            </td>
            <td>
             <input v-model="item.STEEL_GRADE">
            </td>
            <td>
              <input v-model="item.ENTRY_WEIGHT">
            </td>
            <td>
              <input v-model="item.ENTRY_WIDTH">
            </td>
          </template>
          <td>
            <button
              type="button"
              class="btn btn-outline-primary"
              v-if="!item.key"
              @click.prevent="update(index, item.COIL_NUMBER)"
            >
              修改
            </button>
            <template v-if="item.key">
              <button type="button" class="btn btn-outline-primary" v-if="item.key"
              @click="update_commit" >
              完成
            </button>
            </template>

            <button class="btn btn-outline-primary" @click="del(item)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view />
    <button type="commit" class="btn btn-outline-primary" @click="add">
      新增
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coil: {
        data: {}
      }
    }
  },
  methods: {
    add () {
      this.$router.push({ name: '鋼捲新增' })
    },
    show_value () {
      this.$http.get('/api/getValue').then((res) => {
        this.coil.data = res.data
      })
    },
    update (index, tdcoilno) {
      this.coil.data[index].key = true
      this.$set(this.coil.data, index, this.coil.data[index])
    },
    update_commit () {},
    del (item) {
      this.$http.post('/api/delete', {
        COIL_NUMBER: item.COIL_NUMBER
      }).then((res) => {
        console.log('res', res)
        location.reload()
      })
    }
  },
  created () {
    this.show_value()
  }
}
</script>

<style>
#button {
  padding-bottom: 60px;
}
</style>
