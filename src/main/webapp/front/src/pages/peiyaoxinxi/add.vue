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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="配药编号" prop="peiyaobianhao">
              <el-input v-model="ruleForm.peiyaobianhao" placeholder="配药编号" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="处方名称" prop="chufangmingcheng">
            <el-select  @change="chufangmingchengChange" v-model="ruleForm.chufangmingcheng" placeholder="请选择处方名称">
              <el-option
                  v-for="(item,index) in chufangmingchengOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="账号" prop="zhanghao">
            <el-input v-model="ruleForm.zhanghao" 
                placeholder="账号" clearable :disabled=" false  ||ro.zhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="姓名" prop="xingming">
            <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" clearable :disabled=" false  ||ro.xingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="药物名称" prop="yaowumingcheng">
            <el-input v-model="ruleForm.yaowumingcheng" 
                placeholder="药物名称" clearable :disabled=" false  ||ro.yaowumingcheng"></el-input>
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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="用量" prop="yongliang">
			<el-input-number v-model="ruleForm.yongliang" placeholder="用量" :disabled="ro.yongliang"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="药物质量" prop="yaowuzhiliang">
			<el-input-number v-model="ruleForm.yaowuzhiliang" placeholder="药物质量" :disabled="ro.yaowuzhiliang"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="服用医嘱" prop="fuyongyizhu">
            <el-input v-model="ruleForm.fuyongyizhu" 
                placeholder="服用医嘱" clearable :disabled=" false  ||ro.fuyongyizhu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="配药时间" prop="peiyaoshijian">
              <el-date-picker
				  :disabled=" false  ||ro.peiyaoshijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.peiyaoshijian" 
                  type="datetime"
                  placeholder="配药时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="药师账号" prop="yaoshizhanghao">
            <el-input v-model="ruleForm.yaoshizhanghao" 
                placeholder="药师账号" clearable :disabled=" false  ||ro.yaoshizhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="药师姓名" prop="yaoshixingming">
            <el-input v-model="ruleForm.yaoshixingming" 
                placeholder="药师姓名" clearable :disabled=" false  ||ro.yaoshixingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px"}' label="备注" prop="beizhu">
            <el-input v-model="ruleForm.beizhu" 
                placeholder="备注" clearable :disabled=" false  ||ro.beizhu"></el-input>
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
				peiyaobianhao : false,
				chufangmingcheng : false,
				zhanghao : false,
				xingming : false,
				yaowumingcheng : false,
				yaowufengmian : false,
				yongliang : false,
				yaowuzhiliang : false,
				fuyongyizhu : false,
				peiyaoshijian : false,
				yaoshizhanghao : false,
				yaoshixingming : false,
				beizhu : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          peiyaobianhao: this.getUUID(),
          chufangmingcheng: '',
          zhanghao: '',
          xingming: '',
          yaowumingcheng: '',
          yaowufengmian: '',
          yongliang: '',
          yaowuzhiliang: '',
          fuyongyizhu: '',
          peiyaoshijian: '',
          yaoshizhanghao: '',
          yaoshixingming: '',
          beizhu: '',
        },
        chufangmingchengOptions: [],


        rules: {
          peiyaobianhao: [
          ],
          chufangmingcheng: [
            { required: true, message: '处方名称不能为空', trigger: 'blur' },
          ],
          zhanghao: [
          ],
          xingming: [
          ],
          yaowumingcheng: [
          ],
          yaowufengmian: [
          ],
          yongliang: [
            { required: true, message: '用量不能为空', trigger: 'blur' },
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          yaowuzhiliang: [
            { required: true, message: '药物质量不能为空', trigger: 'blur' },
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          fuyongyizhu: [
          ],
          peiyaoshijian: [
          ],
          yaoshizhanghao: [
          ],
          yaoshixingming: [
          ],
          beizhu: [
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
      this.ruleForm.peiyaoshijian = this.getCurDateTime()
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
            if(o=='peiyaobianhao'){
              this.ruleForm.peiyaobianhao = obj[o];
              this.ro.peiyaobianhao = true;
              continue;
            }
            if(o=='chufangmingcheng'){
              this.ruleForm.chufangmingcheng = obj[o];
              this.ro.chufangmingcheng = true;
              continue;
            }
            if(o=='zhanghao'){
              this.ruleForm.zhanghao = obj[o];
              this.ro.zhanghao = true;
              continue;
            }
            if(o=='xingming'){
              this.ruleForm.xingming = obj[o];
              this.ro.xingming = true;
              continue;
            }
            if(o=='yaowumingcheng'){
              this.ruleForm.yaowumingcheng = obj[o];
              this.ro.yaowumingcheng = true;
              continue;
            }
            if(o=='yaowufengmian'){
              this.ruleForm.yaowufengmian = obj[o].split(",")[0];
              this.ro.yaowufengmian = true;
              continue;
            }
            if(o=='yongliang'){
              this.ruleForm.yongliang = obj[o];
              this.ro.yongliang = true;
              continue;
            }
            if(o=='yaowuzhiliang'){
              this.ruleForm.yaowuzhiliang = obj[o];
              this.ro.yaowuzhiliang = true;
              continue;
            }
            if(o=='fuyongyizhu'){
              this.ruleForm.fuyongyizhu = obj[o];
              this.ro.fuyongyizhu = true;
              continue;
            }
            if(o=='peiyaoshijian'){
              this.ruleForm.peiyaoshijian = obj[o];
              this.ro.peiyaoshijian = true;
              continue;
            }
            if(o=='yaoshizhanghao'){
              this.ruleForm.yaoshizhanghao = obj[o];
              this.ro.yaoshizhanghao = true;
              continue;
            }
            if(o=='yaoshixingming'){
              this.ruleForm.yaoshixingming = obj[o];
              this.ro.yaoshixingming = true;
              continue;
            }
            if(o=='beizhu'){
              this.ruleForm.beizhu = obj[o];
              this.ro.beizhu = true;
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
            if((json.yaoshizhanghao!=''&&json.yaoshizhanghao) || json.yaoshizhanghao==0){
                this.ruleForm.yaoshizhanghao = json.yaoshizhanghao;
				this.ro.yaoshizhanghao = true;
            }
            if((json.yaoshixingming!=''&&json.yaoshixingming) || json.yaoshixingming==0){
                this.ruleForm.yaoshixingming = json.yaoshixingming;
				this.ro.yaoshixingming = true;
            }
          }
        });
        this.$http.get('option/chufangxinxi/chufangmingcheng', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.chufangmingchengOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },
      // 下二随
      chufangmingchengChange () {
        this.$http.get('follow/chufangxinxi/chufangmingcheng?columnValue=' + this.ruleForm.chufangmingcheng, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.zhanghao){
              this.ruleForm.zhanghao = res.data.data.zhanghao
            }
            if(res.data.data.xingming){
              this.ruleForm.xingming = res.data.data.xingming
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`peiyaoxinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			if(this.ruleForm.peiyaobianhao){
				this.ruleForm.peiyaobianhao = String(this.ruleForm.peiyaobianhao)
			}
			if(this.ruleForm.yaowuzhiliang>this.ruleForm.yongliang){
				this.$message.error("药物质量不能超过用量");
				return
			}
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
						this.$http.get('peiyaoxinxi/list', {
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


								this.$http.post(`peiyaoxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


						this.$http.post(`peiyaoxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
