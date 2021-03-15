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
          <tr v-for = "(item,index) in coil" :key="item.COIL_NUMBER">
            <th scope="row">{{ index+1 }}</th>
            <td>{{ item.COIL_NUMBER }}</td>
            <td>{{ item.STEEL_GRADE }}</td>
            <td>{{ item.ENTRY_WEIGHT }}</td>
            <td>{{ item.ENTRY_WIDTH }}</td>
            <td>
              <button type="button" class="btn btn-outline-primary" @click="update">修改</button>
              <button  class="btn btn-outline-primary" v-on:click="del(item)">刪除</button>
            </td>
          </tr>
        </tbody>
    </table>
    <component class="showon" ref="showon" :is="content"></component>
    <router-view/>
    <button type="commit" class="btn btn-outline-primary" @click="add">新增</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coil: [],
      check: 'true'
    }
  },
  methods: {
    add () {
      this.$router.push({name: '鋼捲新增'})
    },
    show_value () {
      this.$http.get('/api/getValue').then((res) => {
        this.coil = res.data
      })
    },
    del (item) {
      this.$http.post('/api/delete', {
        coil_no: item.COIL_NUMBER
      }).then((res) => {
        console.log('res', res)
        location.reload()
      })
    }
  },
  computed: {
    update: function () {
      return this.check
    }
  },
  created () {
    this.show_value()
  }
}
</script>

<style scoped>
.showon{
  background-color: black;
  display: block;
}
#button{
  padding-bottom:60px;
}
</style>
