<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="nickname" label="姓名"> </el-table-column>
    <el-table-column prop="jam_index" label="票数"> </el-table-column>
    <el-table-column prop="rank" label="排名"> </el-table-column>
    <el-table-column label="与后一名差距">
      <template #default="scope">
        <div>
          {{ tableData[scope.$index]?.jam_index - tableData[scope.$index+1]?.jam_index }}
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    let tableData = ref([]);
    setInterval(() => {
      axios
        .get(`/api/api/theme/rank?theme=movie_cp&page=1&count=10`)
        .then((res) => {
          tableData.value = res.data.data.data;
        });
    }, 1000);
    return { tableData };
  },
};
</script>
<style>
</style>
