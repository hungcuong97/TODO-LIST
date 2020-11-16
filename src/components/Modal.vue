<template>
  <div id="modal">
    <el-button
      :class="classButton"
      :size="sizeButton"
      :type="typeButton"
      @click="clickButton"
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
        <el-button size="small" type="primary" @click="save">{{
          nameSaveButton
        }}</el-button>
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
    },
    typeButton: {
      type: String,
    },
    sizeButton: {
      type: String,
    },
    classButton: {
      type: String,
    },
    titleModal: {
      type: String,
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

  methods: {
    save() {
      this.dialogFormVisible = false;
      this.$emit("save");
    },
    clickButton() {
      this.dialogFormVisible = true;
      this.$emit("clickButton");
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
