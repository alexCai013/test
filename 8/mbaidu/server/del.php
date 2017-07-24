<?php
    require_once('db.php');
	if (!$con){
		echo json_encode(array('链接' => '失败' ));	
	}else{
		$newsid = $_POST['newsid'];
		$sql = "DELETE FROM news WHERE id = '{$newsid}'";
		 mysqli_select_db($con,"baidu_news");
		 mysqli_set_charset ($con,'utf8');
		 mysqli_query($con,$sql);
		 echo json_encode(array('删除'=>'成功'));

	}
    mysqli_close($con);
?>