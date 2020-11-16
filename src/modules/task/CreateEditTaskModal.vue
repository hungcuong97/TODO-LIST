<template>
  <div id="create-edit-task">
    <Modal
      @clickButton="clickButton"
      @save="save"
      :sizeButton="sizeButton"
      :typeButton="typeButton"
      :classButton="classButton"
      :nameButton="nameButton"
      :titleModal="titleModal"
    >
      <div slot="content-modal">
        <el-form :model="form">
          <!-- Tên công việc  -->
          <el-form-item label="Tên công việc" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              placeholder="Tên công việc"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <!-- Mô tả công việc -->
          <el-form-item label="Mô tả công việc" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="Mô tả công việc"
              v-model="form.description"
            >
            </el-input>
          </el-form-item>

          <!-- Ngày bắt đầu -->
          <el-form-item label="Ngày bắt đầu" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.startDate"
              placeholder="Ngày bắt đầu"
              type="date"
            >
            </el-date-picker>
          </el-form-item>

          <!-- Ngày kết thúc -->
          <el-form-item label="Ngày kết thúc" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.endDate"
              placeholder="Ngày kết thúc"
              type="date"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "../../components/Modal.vue";

export default {
  name: "CreateEditTaskModal",
  props: {
    form: {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
    },

    nameButton: {
      type: String,
      default: "Thêm mới",
    },
    typeButton: {
      type: String,
      default: "",
    },
    sizeButton: {
      type: String,
      default: "",
    },
    classButton: {
      type: String,
      default: "",
    },
    titleModal: {
      type: String,
      default: "Thêm mới",
    },
  },
  data() {
    return {
      formLabelWidth: "120px",
    };
  },
  methods: {
    save() {
      this.$emit("save", this.form);
    },
    clickButton() {
      this.$emit("clickButton");
    },
  },
  components: {
    Modal,
  },
};
</script>

<style></style>
