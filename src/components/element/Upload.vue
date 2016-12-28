<template>
	<el-upload
	  action="//jsonplaceholder.typicode.com/posts/"
	  :on-preview="handlePreview"
	  :on-remove="handleRemove">
	  <el-button size="small" type="primary">点击上传</el-button>
	  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
</template>
<script>
  export default {
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>