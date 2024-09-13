<template>
<div :style='{"width":"100%","padding":"20px 10%","margin":"10px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"width":"100%","padding":"20px 0","position":"relative","background":"#f9f9f9"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="药物名称" prop="yaowumingcheng">
            <el-input v-model="ruleForm.yaowumingcheng" 
                placeholder="药物名称" clearable :disabled=" false  ||ro.yaowumingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}'  label="药物分类" prop="yaowufenlei">
            <el-select v-model="ruleForm.yaowufenlei" placeholder="请选择药物分类" :disabled=" false  ||ro.yaowufenlei" >
              <el-option
                  v-for="(item,index) in yaowufenleiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="药物封面" v-if="type!='cross' || (type=='cross' && !ro.yaowufengmian)" prop="yaowufengmian">
            <file-upload
            tip="点击上传药物封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.yaowufengmian?ruleForm.yaowufengmian:''"
            @change="yaowufengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' class="upload" v-else label="药物封面" prop="yaowufengmian">
                <img v-if="ruleForm.yaowufengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.yaowufengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.yaowufengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="性质" prop="xingzhi">
            <el-input v-model="ruleForm.xingzhi" 
                placeholder="性质" clearable :disabled=" false  ||ro.xingzhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="用途" prop="yongtu">
            <el-input v-model="ruleForm.yongtu" 
                placeholder="用途" clearable :disabled=" false  ||ro.yongtu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="用量" prop="yongliang">
			<el-input-number v-model="ruleForm.yongliang" placeholder="用量" :disabled="ro.yongliang"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="功效作用" prop="gongxiaozuoyong">
            <el-input v-model="ruleForm.gongxiaozuoyong" 
                placeholder="功效作用" clearable :disabled=" false  ||ro.gongxiaozuoyong"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="不良反应" prop="buliangfanying">
            <el-input v-model="ruleForm.buliangfanying" 
                placeholder="不良反应" clearable :disabled=" false  ||ro.buliangfanying"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="禁忌信息" prop="jinjixinxi">
            <el-input v-model="ruleForm.jinjixinxi" 
                placeholder="禁忌信息" clearable :disabled=" false  ||ro.jinjixinxi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="用量安全" prop="yonglianganquan">
            <el-input v-model="ruleForm.yonglianganquan" 
                placeholder="用量安全" clearable :disabled=" false  ||ro.yonglianganquan"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="临床应用" prop="linchuangyingyong">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="临床应用"
              v-model="ruleForm.linchuangyingyong">
            </el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#654B3C","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #654B3C","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#654B3C","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				yaowumingcheng : false,
				yaowufenlei : false,
				yaowufengmian : false,
				xingzhi : false,
				yongtu : false,
				yongliang : false,
				gongxiaozuoyong : false,
				buliangfanying : false,
				jinjixinxi : false,
				yonglianganquan : false,
				linchuangyingyong : false,
				discussnum : false,
				storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          yaowumingcheng: '',
          yaowufenlei: '',
          yaowufengmian: '',
          xingzhi: '',
          yongtu: '',
          yongliang: '',
          gongxiaozuoyong: '',
          buliangfanying: '',
          jinjixinxi: '',
          yonglianganquan: '',
          linchuangyingyong: '',
          discussnum: '',
          storeupnum: '',
        },
        yaowufenleiOptions: [],


        rules: {
          yaowumingcheng: [
            { required: true, message: '药物名称不能为空', trigger: 'blur' },
          ],
          yaowufenlei: [
            { required: true, message: '药物分类不能为空', trigger: 'blur' },
          ],
          yaowufengmian: [
          ],
          xingzhi: [
          ],
          yongtu: [
          ],
          yongliang: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          gongxiaozuoyong: [
          ],
          buliangfanying: [
          ],
          jinjixinxi: [
          ],
          yonglianganquan: [
          ],
          linchuangyingyong: [
          ],
          discussnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='yaowumingcheng'){
              this.ruleForm.yaowumingcheng = obj[o];
              this.ro.yaowumingcheng = true;
              continue;
            }
            if(o=='yaowufenlei'){
              this.ruleForm.yaowufenlei = obj[o];
              this.ro.yaowufenlei = true;
              continue;
            }
            if(o=='yaowufengmian'){
              this.ruleForm.yaowufengmian = obj[o].split(",")[0];
              this.ro.yaowufengmian = true;
              continue;
            }
            if(o=='xingzhi'){
              this.ruleForm.xingzhi = obj[o];
              this.ro.xingzhi = true;
              continue;
            }
            if(o=='yongtu'){
              this.ruleForm.yongtu = obj[o];
              this.ro.yongtu = true;
              continue;
            }
            if(o=='yongliang'){
              this.ruleForm.yongliang = obj[o];
              this.ro.yongliang = true;
              continue;
            }
            if(o=='gongxiaozuoyong'){
              this.ruleForm.gongxiaozuoyong = obj[o];
              this.ro.gongxiaozuoyong = true;
              continue;
            }
            if(o=='buliangfanying'){
              this.ruleForm.buliangfanying = obj[o];
              this.ro.buliangfanying = true;
              continue;
            }
            if(o=='jinjixinxi'){
              this.ruleForm.jinjixinxi = obj[o];
              this.ro.jinjixinxi = true;
              continue;
            }
            if(o=='yonglianganquan'){
              this.ruleForm.yonglianganquan = obj[o];
              this.ro.yonglianganquan = true;
              continue;
            }
            if(o=='linchuangyingyong'){
              this.ruleForm.linchuangyingyong = obj[o];
              this.ro.linchuangyingyong = true;
              continue;
            }
            if(o=='discussnum'){
              this.ruleForm.discussnum = obj[o];
              this.ro.discussnum = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.$http.get('option/yaowufenlei/yaowufenlei', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.yaowufenleiOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`yaowuxinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('yaowuxinxi/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`yaowuxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`yaowuxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      yaowufengmianUploadChange(fileUrls) {
          this.ruleForm.yaowufengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 150px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #000;
	  width: auto;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #000;
	  width: auto;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #000;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #000;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #000;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 12px;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  min-height: 120px;
	  height: auto;
	}
</style>
