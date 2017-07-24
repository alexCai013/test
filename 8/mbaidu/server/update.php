<?php
    require_once('db.php');
	if (!$con){
		echo json_encode(array('链接' => '失败' ));	
	}else{
		$newsid = $_POST['id'];
		$newstype =  $_POST['newstype'];
		$newstitle = $_POST['newstitle'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newssrc = $_POST['newssrc'];
		$sql = "UPDATE news SET newstitle='{$newstitle}',newstype='{$newstype}',newsimg='{$newsimg}',newstime='{$newstime}',newssrc='{$newssrc}' WHERE id='{$newsid}'";
		mysqli_select_db($con,"baidu_news");
		mysqli_set_charset ($con,'utf8');
		$result = mysqli_query($con,$sql);
		echo json_encode(array('更新'=>'成功'));
	}
    mysqli_close($con);
?>