<?php
 	require_once('db.php');
    if (!$con){
		echo json_encode(array('链接' => '失败' ));	
	}else{
		$newstype =  $_POST['newstype'];
		$newstitle = $_POST['newstitle'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newssrc = $_POST['newssrc'];
		$sql = "INSERT INTO news (newstype,newstitle,newsimg,newstime,newssrc) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";
		 mysqli_select_db($con,"baidu_news");
		 mysqli_set_charset ($con,'utf8');
		 mysqli_query($con,$sql);
		 echo json_encode(array('新增'=>'成功'));
	}
	mysqli_close($con);
?>