<?php
    require_once('db.php');
	if (!$con){
		echo json_encode(array('链接' => '失败' ));	
	}else{
		 $sql="select * from news";
		 mysqli_select_db($con,"baidu_news");
		 mysqli_set_charset ($con,'utf8');
		 $result = mysqli_query($con,$sql);
		 $senddata = array(); 
		 while($row = mysqli_fetch_assoc($result)){
			array_push($senddata, array('id'=>$row['id'],
										'newstype'=>$row['newstype'],
										'newstitle'=>$row['newstitle'],
										'newsimg'=>$row['newsimg'],
										'newstime'=>$row['newstime'],
										'newssrc'=>$row['newssrc']
			));
		}
		echo json_encode($senddata);
	}
	mysqli_close($con);
?>