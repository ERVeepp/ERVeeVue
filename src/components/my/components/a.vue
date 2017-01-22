<template lang="html">
	<div>
		<el-table :data="contents.con.tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapGetters([
	            'contents'
	        ])
	  	}
	}
</script>

<style lang="css">

</style>
