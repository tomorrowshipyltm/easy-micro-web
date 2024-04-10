webpackJsonp([43],{FOYG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("s/Rn"),s={name:"brandList",data:function(){return{operates:[{label:"显示品牌",value:"showBrand"},{label:"隐藏品牌",value:"hideBrand"}],operateType:null,listQuery:{keyword:null,pageNum:1,pageSize:10},list:null,total:null,listLoading:!0,multipleSelection:[]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(n.c)(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total,t.totalPage=e.data.totalPage,t.pageSize=e.data.pageSize})},handleSelectionChange:function(t){this.multipleSelection=t},handleUpdate:function(t,e){this.$router.push({path:"/pms/updateBrand",query:{id:e.id}})},handleDelete:function(t,e){var a=this;this.$confirm("是否要删除该品牌","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.b)(e.id).then(function(t){a.$message({message:"删除成功",type:"success",duration:1e3}),a.getList()})})},getProductList:function(t,e){console.log(t,e)},getProductCommentList:function(t,e){console.log(t,e)},handleFactoryStatusChange:function(t,e){var a=this,s=new URLSearchParams;s.append("ids",e.id),s.append("factoryStatus",e.factoryStatus),Object(n.f)(s).then(function(t){a.$message({message:"修改成功",type:"success",duration:1e3})}).catch(function(t){0===e.factoryStatus?e.factoryStatus=1:e.factoryStatus=0})},handleShowStatusChange:function(t,e){var a=this,s=new URLSearchParams;s.append("ids",e.id),s.append("showStatus",e.showStatus),Object(n.g)(s).then(function(t){a.$message({message:"修改成功",type:"success",duration:1e3})}).catch(function(t){0===e.showStatus?e.showStatus=1:e.showStatus=0})},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},searchBrandList:function(){this.listQuery.pageNum=1,this.getList()},handleBatchOperate:function(){var t=this;if(console.log(this.multipleSelection),this.multipleSelection<1)this.$message({message:"请选择一条记录",type:"warning",duration:1e3});else{var e=0;if("showBrand"===this.operateType)e=1;else{if("hideBrand"!==this.operateType)return void this.$message({message:"请选择批量操作类型",type:"warning",duration:1e3});e=0}for(var a=[],s=0;s<this.multipleSelection.length;s++)a.push(this.multipleSelection[s].id);var i=new URLSearchParams;i.append("ids",a),i.append("showStatus",e),Object(n.g)(i).then(function(e){t.getList(),t.$message({message:"修改成功",type:"success",duration:1e3})})}},addBrand:function(){this.$router.push({path:"/pms/addBrand"})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[a("div",[a("i",{staticClass:"el-icon-search"}),t._v(" "),a("span",[t._v("筛选搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.searchBrandList()}}},[t._v("\n          查询结果\n        ")])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[a("el-form-item",{attrs:{label:"输入搜索："}},[a("el-input",{staticStyle:{width:"203px"},attrs:{placeholder:"品牌名称/关键字"},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets"}),t._v(" "),a("span",[t._v("数据列表")]),t._v(" "),a("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){t.addBrand()}}},[t._v("\n      添加\n    ")])],1),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"brandTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"品牌名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"品牌首字母",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.firstLetter))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"排序",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sort))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"品牌制造商",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){t.handleFactoryStatusChange(e.$index,e.row)}},model:{value:e.row.factoryStatus,callback:function(a){t.$set(e.row,"factoryStatus",a)},expression:"scope.row.factoryStatus"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"是否显示",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){t.handleShowStatusChange(e.$index,e.row)}},model:{value:e.row.showStatus,callback:function(a){t.$set(e.row,"showStatus",a)},expression:"scope.row.showStatus"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"相关",width:"220",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("商品：")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){t.getProductList(e.$index,e.row)}}},[t._v("100\n          ")]),t._v(" "),a("span",[t._v("评价：")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){t.getProductCommentList(e.$index,e.row)}}},[t._v("1000\n          ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleUpdate(e.$index,e.row)}}},[t._v("编辑\n          ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"batch-operate-container"},[a("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:t.operateType,callback:function(e){t.operateType=e},expression:"operateType"}},t._l(t.operates,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleBatchOperate()}}},[t._v("\n      确定\n    ")])],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"pageNum",e)}}})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(t){a("UYPk")},"data-v-2ba4c0f4",null);e.default=l.exports},UYPk:function(t,e){}});
//# sourceMappingURL=43.3bd6a7c7ebd4f3fcc11e.js.map