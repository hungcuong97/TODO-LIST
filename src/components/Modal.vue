<template>
  <div id="modal">
    <el-button
      :class="classButton"
      :size="sizeButton"
      :type="typeButton"
      @click="dialogFormVisible = true"
    >
      {{ nameButton }}</el-button
    >
    <el-dialog :title="titleModal" :visible.sync="dialogFormVisible">
      <slot name="content-modal"> </slot>

      <span slot="footer" class="dialog-footer">
        <!-- Button close modal -->
        <el-button size="small" @click="dialogFormVisible = false">{{
          nameCloseButton
        }}</el-button>

        <!-- Button save -->
        <el-button
          size="small"
          type="primary"
          @click="dialogFormVisible = false"
          >{{ nameSaveButton }}</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  props: {
    nameButton: {
      type: String,
      default: "Thêm mới",
    },
    typeButton: {
      type: String,
      default: "success",
    },
    sizeButton: {
      type: String,
      default: "small",
    },
    classButton: {
      type: String,
      default: "",
    },
    titleModal: {
      type: String,
      default: "Thêm mới",
    },
    nameCloseButton: {
      type: String,
      default: "Đóng",
    },
    nameSaveButton: {
      type: String,
      default: "Lưu",
    },
  },
};
</script>

<style>
.pull-right {
  position: absolute;
  right: 0px;
}
#dialog {
  text-align: left !important;
}
</style>
