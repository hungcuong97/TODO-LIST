<template>
  <div id="create-task">
    <Modal
      classButton="pull-right"
      :nameButton="nameButton"
      :titleModal="titleModal"
    >
      <div slot="content-modal">
        <el-form :model="form">
          <el-form-item label="Promotion name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Zones" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="Please select a zone">
              <el-option label="Zone No.1" value="shanghai"></el-option>
              <el-option label="Zone No.2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "../../components/Modal.vue";

export default {
  name: "CreateTask",
  data() {
    return {
      nameButton: "Thêm mới công việc",
      titleModal: "Thêm mới công việc",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {},
  components: {
    Modal,
  },
};
</script>

<style></style>
