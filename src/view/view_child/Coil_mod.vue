<template>
<table class="table">
    <!-- <form class="row g-3"> -->
        <!-- <div class="col-auto">
            <label for="staticEmail2" class="visually-hidden">Email</label>
            <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
        </div> -->
        <thead class="thead-dark">
            <tr>
            <th scope="col">鋼捲</th>
            <th scope="col">排程號碼</th>
            <th scope="col">入料重</th>
            <th scope="col">入料寬</th>
            </tr>
        </thead>
        <td class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="text" class="form-control" id="input1" v-model="temp.input1" placeholder="請輸入鋼捲">
        </td>
        <td class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="text" class="form-control" id="input2" v-model="temp.input2" placeholder="請輸入排程號碼">
        </td>
        <td class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="text" class="form-control" id="input3" v-model="temp.input3" placeholder="請輸入數字">
        </td>
        <td class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="text" class="form-control" id="input4" v-model="temp.input4" placeholder="請輸入入料寬">
        </td>
        <td class="col-auto">
            <button type="submit" class="btn btn-primary mb-3" @click="save">儲存</button>
            <button type="submit" class="btn btn-primary mb-3" @click="before">取消</button>
        </td>
    <!-- </form> -->
</table>
</template>

<script>
export default {
  name: 'created',
  data () {
    return {
      temp: {}
    }
  },
  methods: {
    before () {
      this.$router.back()
    },
    // save () {
    //   this.$http.get('/api/getArticle').then((res) => {
    //     console.log('res', res)
    //   })
    // }
    save () {
      this.$http.post('/api/getArticle', {
        coil_no: this.temp.input1,
        schd_no: this.temp.input2,
        entry_weight: this.temp.input3,
        entry_width: this.temp.input4
      }).then((res) => {
        console.log('res', res)
      })
    }

  }
}
</script>
