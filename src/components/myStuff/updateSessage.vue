<template>
    <div>
			<div class="topBar">
				<van-icon name="arrow-left" size=30px  @click="front"/>
				<but>修改信息</but>		
			</div>
			<!-- 修改头像 -->
			<div class="updateImg">
				<div class="backImg">
					<img src="../../assets/myBack.jpg" alt="">			
				</div>
				
				
				<div class="headImg">
					<img src="../../assets/myBack.jpg" alt="">
					<!-- 覆盖住头像 -->
					<van-uploader
					          :after-read="afterRead"
					          :before-read="beforeRead"
					          :max-count="1"
					          v-model="imgList"
					          :preview-image="false"
					        >
					          <div class="avator-change"></div>
					</van-uploader>
					<!-- 覆盖住头像 -->
					
					<span>点击修改头像</span>
				</div>
				
			</div>
			<!-- 内容开始 -->
			<div class="myComtent">
				<ul>
					<li>昵称
						<input type="text" placeholder="帅哥">
					</li>
					<li>真实姓名
						<input type="text" placeholder="林君源">
					</li>
<!-- 					<li>手机号码
						<input type="text" placeholder="1134809127">
					</li> -->
					<li>身份证
						<input type="text" placeholder="3503221*******1530">
					</li>
					<!-- 性别 -->
					<li 
					@click="showPopup()"
					
					>性别     
						<span ref="sex">
							男
						</span>
					</li>
				</ul>
			</div>
			<van-button type="info" class="myButton" @click="YesMy()">确认修改</van-button>
			
			<van-action-sheet 
			v-model="show" 
			:actions="actions" 
			@select="onSelect" 
			 cancel-text="取消"
			/>
			</van-action-sheet>
			
				<!-- 上传头像插件的样式 -->
			 <div class="cropper-wrapper" v-show="cropperView">
			      <vue-cropper
			        ref="cropper"
			        :mode="option.mode"
			        :img="option.img"
			        :outputType="option.outputType"
			        :info="false"
			        :full="option.full"
			        :canMove="option.canMove"
			        :canMoveBox="option.canMoveBox"
			        :fixedBox="option.fixedBox"
			        :original="option.original"
			        :autoCrop="option.autoCrop"
			        :fixed="option.fixed"
			        :fixedNumber="option.fixedNumber"
			        :autoCropWidth="option.autoCropWidth"			
			        :autoCropHeight="option.autoCropHeight"
			        :canScale="option.canScale"
			      ></vue-cropper>
			      <div class="cropper-btn">
			        <a @click="hiddenCropperView">取&nbsp;消</a>
			        <a @click="finish('base64')">确&nbsp;定</a>
			      </div>
			    </div>
			
			
			
			
		</div>
</template>

<script>
	import { VueCropper }  from 'vue-cropper' 
	import but from "../Bottombar/but/but.vue"
export default {
    data () {
      return {
				show: false,
				actions: [
				        { name: '男' },
				        { name: '女' },
				      ],
							
				// 上传头像需要用到的参数
				 singleUserInfo: {},
				      topProfileView: false,
				      topSubmitLogin: true,
				      //默认头像地址
				      getDefaultAvator: require("../../assets/myBack.jpg"),
				      imgList: [],
				
				      //cropper出现和隐藏
				      cropperView: false,
				      // cropper配置的参数
				      option: {
				        img: "", //裁切图片的地址
				        outputSize: 1, //裁剪生成图片的质量 0.1-1
				        full: false, //是否输出原图比例的截图
				        outputType: "png", //裁剪生成图片的格式
				        canMove: true, //上传图片是否可以移动
				        fixedBox: false, //固定截图框大小 不允许改变
				        original: false, //上传图片按照原始比例渲染
				        canMoveBox: true, //截图框能否拖动
				        autoCrop: true, //是否默认生成截图框
				        autoCropWidth: 200,
				        autoCropHeight: 200,
				        // 开启宽度和高度比例
				        fixed: true,
				        fixedNumber: [1, 1],
				        canScale: true,
				        mode: "100%"
				      },
					// 上传头像需要用到的参数	结束
			}
    },

    methods: {
			 //读取头像之后 可发ajax给后台
			    afterRead(file) {
			      this.option.img = file.content;
			      this.cropperView = true;
			    },
		
			// 上传头像所需要的方法开始
			  //读取头像之前 判断上传文件
			    beforeRead(file) {
			      if (!/\/(jpg|jpeg|png|bmp|BMP|JPG|PNG|JPEG)$/.test(file.type)) {
			        this.$toast({
			          type: "fail",
			          message: "您上传的不是图片格式哦~",
			          icon: "cross",
			          duration: 1500
			        });
			        return false;
			      } else {
			        return true;
			      }
			    },
			
			    //截图完成
			    finish(type) {
			      if (type === "blob") {
			        this.$refs.cropper.getCropBlob(() => {});
							//隐藏cropper剪切
							this.cropperView = false;
			      } else {
								//隐藏cropper剪切
								this.cropperView = false;
			        this.$refs.cropper.getCropData(data => {
			          //转换file对象 上传服务器
			          let TrueFile = baseTofile.dataURLtoFile(data, "avator");
			
			          let d = new FormData();
			          d.append("file", TrueFile);
			
			          //上传头像文件的接口
			          submitAvator(d)
			            .then(r => {
			              if (r.length === 0) {
			                this.$toast({
			                  type: "fail",
			                  message: "上传头像失败!",
			                  icon: "cross",
			                  duration: 1500
			                });
			                this.cropperView = false;
			                //清空
			                this.imgList = [];
											
			              } else {
			                //如果是用户
			                if(this.singleUserInfo.is_guide===undefined){
			                  changeUserAvator({
			                    userAvatar: r,
			                    userId: this.singleUserInfo.user_id
			                  }).then(res => {
			                    if (res.code === "200") {
			                      this.$toast({
			                        type: "success",
			                        message: "头像更换成功！",
			                        duration: 1500
			                      });
			                      //隐藏cropper剪切
			                      this.cropperView = false;
			                      //清空
			                      this.imgList = [];
			                      //重新获取个人用户信息
			                      getUserInfoById({
			                        userId: this.singleUserInfo.user_id
			                      }).then(resData => {
			                        if (resData.status.code === "200") {
			                          //获取新的用户信息
			                          let { user_avatar: change_user_acator } = resData.data;
			                          let userInfo = JSON.parse(
			                              localStorage.getItem("userInfo")
			                          );
			                          //跟改本地头像地址储存
			                          userInfo.user_avatar = change_user_acator;
			                          //跟改本地头像地址储存
			                          localStorage.setItem(
			                              "userInfo",
			                              JSON.stringify(userInfo)
			                          );
			                          this.getUserInfo();
			                        }
			                      });
			                    }
			                  });
			                }
			                //如果是导游
			                // if(this.singleUserInfo.is_guide!==undefined){
			                //   changeGuideAvator({
			                //     guideAvatar: r,
			                //     guideId: this.singleUserInfo.user_id
			                //   }).then(res => {
			                //     if (res.code === "200") {
			                //       this.$toast({
			                //         type: "success",
			                //         message: "头像更换成功！",
			                //         duration: 1500
			                //       });
			                //       //隐藏cropper剪切
			                //       this.cropperView = false;
			                //       //清空
			                //       this.imgList = [];
			                //       //重新获取个人用户信息
			                //       getGuideInfoById({
			                //        guideId: this.singleUserInfo.user_id
			                //       }).then(resData => {
			                //         if (resData.status.code === "200") {
			                //           //获取新的用户信息
			                //           let { guide_avatar: change_user_acator } = resData.data;
			                //           let userInfo = JSON.parse(
			                //               localStorage.getItem("userInfo")
			                //           );
			                //           //跟改本地头像地址储存
			                //           userInfo.user_avatar = change_user_acator;
			                //           //跟改本地头像地址储存
			                //           localStorage.setItem(
			                //               "userInfo",
			                //               JSON.stringify(userInfo)
			                //           );
			                //           this.getUserInfo();
			                //         }
			                //       });
			                //     }
			                //   });
			                // }
			              }
			            })
			        });
			      }
			    },
			    //取消截图  就隐藏cropper
			    hiddenCropperView() {
			      // this.$refs.cropper.stopCrop()
			      this.cropperView = false;
			
			      //清空
			      this.imgList = [];
			    },
			// 上传头像所需要的方法结束
			
			
			front(){		// 返回前一页
				this.$router.go(-1)
			},
			YesMy(){
				this.$toast({
				  message: '修改成功',
				  icon: 'success',
				});
				this.front()
			},	
			showPopup(){		//弹出层控制
				this.show = !this.show;
			}	,
			onSelect(e){			//x选择好后触发
			 this.$refs.sex.innerText=e.name
				// console.log(e)
				this.showPopup()
			},
		}	,

    components: {
			but,
			VueCropper,
		},
}
</script>

<style scoped>
	.topBar{
		display: flex;
		align-items: center;
		overflow: hidden;
		padding-left: 2vw;
		padding-right: 2vw;
		box-sizing: border-box;
		z-index: 99;
		background: #FFFFFF;
	}
	
	/* 修改头像板块 */
	.updateImg{
		height: 24vh;
		width: 100%;
		overflow: hidden;
		position: relative;
		}
		.backImg{
			height: 100%;
			width: 100%;
		}
		.backImg>img{
			height: 100%;
			width: 100%;
			filter: blur(25px);
		}
		.headImg{
			position: absolute;
			height: 10vh;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		.headImg>img{
			height: 10vh;
			width: 10vh;
			border-radius: 50%;
			border: 1px solid #999999;
			display: block;
			margin: auto;
		}
		.headImg>span{
			display: block;
		}
		
		/* 内容开始 */
		.myComtent>ul{
			/* border: 1px solid #DDDDDD; */
			padding: 2vw;
			margin-top: 2vh;
		}
		.myComtent>ul>li{
			height: 6vh;
			width: 100%;
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			line-height: 6vh;
			border-bottom: 1px solid #DDDDDD;
		}
		.myComtent>ul>li>input{
			text-align: right;
		}
		
		/* 按钮 */
		.myButton{
			width: 90%;
			display: block;
			margin: auto;
			margin-top: 5vh;
			border-radius: 2vh;
		}
			
			/* 上传头像插件的样式 */
			.vue-cropper {
			  background: black;
			  background-image: none !important;
			}
		.cropper-wrapper {
		  position: fixed;
		  top: 0;
		  bottom: 0;
		  left: 0;
		  right: 0;
		  z-index: 10001;
		}
		.cropper-btn {
		  height: 6vh;
		  background: rgba(255, 255, 255, 0.3);
		  width: 100%;
		  position: absolute;
		  bottom: 0;
		  display: flex;
		  flex-direction: row;
		  justify-content: space-between;
		}
		
		.cropper-btn a {
		  font-size: 15px;
		  line-height: 6vh;
		  width: 30%;
		  text-align: center;
		  color: #fff;
		}
		.avator-change{
			
		}
		
		
		/deep/ .van-uploader__input-wrapper {
		  width: 10vh;
		  height: 10vh;
		}
		
		/deep/ .van-uploader {
		  position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%,0);
		}
</style>
