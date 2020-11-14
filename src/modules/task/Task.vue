<template>
  <div id="task">
    <h1>Quản lý công việc</h1>
    <el-row>
      <!-- Input tìm kiếm dữ liệu bảng công việc -->
      <el-col :span="4">
        <el-input
          class="input-search"
          size="small"
          placeholder="Nhập từ tìm kiếm"
          v-model="search"
        />
      </el-col>
      <!-- Button thêm công việc -->
      <el-col :offset="14" :span="6">
        <CreateTask />
      </el-col>
    </el-row>

    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search ||
            data.name.toLowerCase().includes(search.toLowerCase()) ||
            data.description.toLowerCase().includes(search.toLowerCase()) ||
            data.startDate.toLowerCase().includes(search.toLowerCase()) ||
            data.endDate.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="Tên công việc" prop="name"> </el-table-column>
      <el-table-column label="Mô tả công việc" prop="description">
      </el-table-column>
      <el-table-column label="Ngày bắt đầu" prop="startDate"> </el-table-column>
      <el-table-column label="Ngày kết thúc" prop="endDate"> </el-table-column>
      <el-table-column align="center" label="Hành động">
        <template>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import CreateTask from "./CreateTask.vue";

export default {
  name: "Task",
  components: {
    CreateTask,
  },
  data() {
    return {
      tableData: [
        {
          name: "Công việc 1",
          description: "Miêu tả công việc 1",
          startDate: "2020-11-11",
          endDate: "2020-11-30",
        },
        {
          name: "Công việc 2",
          description: "Miêu tả công việc 2",
          startDate: "2020-10-12",
          endDate: "2020-11-25",
        },
        {
          name: "Công việc 3",
          description: "Miêu tả công việc 3",
          startDate: "2020-10-25",
          endDate: "2020-12-10",
        },
        {
          name: "Công việc 4",
          description: "Miêu tả công việc 4",
          startDate: "2020-11-15",
          endDate: "2020-12-30",
        },
      ],
      search: "",
      filtedData: [],
    };
  },

  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style>
.input-search {
  margin-bottom: 10px;
}

#task > h1 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
}
</style>
