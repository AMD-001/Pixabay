<template>
	<div>
		<div class="My_foot">
			<div class="footItem">
				<!-- 脚左边内容 -->
				<div class="footleft">
					<ul>
						<li>关于我们</li>
						<li>联系我们</li>
						<li>商务合作</li>
						<li>App</li>
					</ul>
					<br>
					<div class="footText">
						<span><img src="../assets/img/jianguan.png"></span>
						<span>昌平区市场监督管理局龙泽园所投诉举报电话：010-81748909 营业执照</span>
						<p>Copyright © 北京达内金桥科技有限公司版权所有 京ICP备12003709号-3 京公网安备 11010802029572号</p>
					</div>
				</div>
				<!-- 脚右边内容 -->
				<div class="footRight">
					<div>
						<span>免费图库在线WWW.TMOOC.CN 专注于免费素材搜集</span><br>
						<span>涵盖若干分类，致力于打造权威的图库平台</span>
					</div>
					<div>
						<img src="../assets/img/erweima.jpg"><!-- 75 -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	*{
		margin: 0;padding: 0;
	}
	.My_foot{
		width: 100%;
		height: 200px;
		background-color: #282c30;
	}
	.footItem{
		width: 1200px;
		height: 80%;
		margin: 0 auto;
		border-bottom:1px solid #ccc ;
	}
	/* foot左右部分公共样式 */
	.footleft,.footRight{
		width: 50%;
		height: 100%;
		box-sizing: border-box;
		float: left;
	}
	/* 左边列表 */
	.footleft ul{
		width: 88%;
		height: 40%;
	}
	.footleft li{
		list-style: none;
		text-align: center;
		box-sizing: border-box;
		color: #999;
		float: left;
		width: 25%;
		margin-top: 12%;
	}
	.footleft>ul>li:nth-child(n+2){
		border-left: 1px solid #999;
	}
	.footText{
		margin-top: 20px;
		width: 100%;
	}
	.footText>span{
		color: #fff;
		padding-left: 5px;
		
	}
	.footText p{
		width: 100%;
		font-size: 10px;
		color: #999;
		padding-left: 5px;
	}
	/* /////////////////////////////////////////// */
	.footRight{
		/* display: flex; */
		text-align: right;
		color: #999;
		font-size: 13px;
		
	}
	.footRight>div:first-child{
		width: 85%;
		height: 100%;
		float: left;
		padding-top:95px;
		box-sizing: border-box;
	}
	.footRight div:nth-child(2){
		width: 15%;
		float: left;
		text-align: left;
		padding-top: 65px;
	}
	.footRight img{
		margin-left: 10px;
		width: 75px;
	}
</style>