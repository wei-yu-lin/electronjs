<template>
    <div>
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
            <td>{{ item.coil_no }}</td>
            <td>{{ item.schd_no }}</td>
            <td>{{ item.entry_weight }}</td>
            <td>{{ item.entry_width }}</td>
            <td><button type="button" class="btn btn-outline-primary" @click="update">修改</button><button  class="btn btn-outline-primary" v-on:click="del(item)">刪除</button></td>
          </tr>
        </tbody>
    </table>
    <router-view/>
    <button type="commit" class="btn btn-outline-primary" @click="add">新增</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      coil: []
    }
  },
  methods: {
    add () {
      this.$router.push({name: '鋼捲新增'})
    },
    show_value () {
      this.$http.get('/api/getValue').then((res) => {
        this.coil = res.data
        console.log(res.data)
      })
    },
    update () {
      this.$http.post('/api/setValue', {
        coil_no: this.temp.input1,
        steel_grade: this.temp.input2,
        entry_weight: this.temp.input3,
        entry_width: this.temp.input4
      }).then((res) => {
        console.log('res', res)
        this.$router.back()
      })
    },
    del (item) {
      this.$http.post('/api/delete', {
        coil_no: item.COIL_NUMBER
      }).then((res) => {
        console.log('res', res)
      })
    }
  },
  created () {
    this.show_value()
  }
}
</script>
