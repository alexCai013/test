-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2017-05-20 11:13:29
-- 服务器版本： 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidu_news`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` varchar(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` date NOT NULL,
  `newssrc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '推荐', '习近平“一带一路”高峰论坛系列讲话十大高频词', 'https://imgsa.baidu.com/news/q%3D100/sign=3b8d10b3a3773912c2268161c8188675/42166d224f4a20a48bad6ac99a529822720ed009.jpg', '2017-05-02', '热点'),
(2, '推荐', '羊毛党盯共享单车红包：同时骑两车 一晚刷百元', 'https://t10.baidu.com/it/u=2838462528,2477392276&fm=170&s=E4F01BC747228AF858D571130300C0C2&w=218&h=146&img.JPEG', '2017-05-05', '搜狐要闻'),
(3, '推荐', '巨头财报双发，阿里为何能压倒腾讯', 'https://t12.baidu.com/it/u=1524971405,1459699493&fm=170&s=2F858A463B3A07968BD8B4BF0300D011&w=218&h=146&img.JPEG', '2017-05-02', '猜你喜欢'),
(4, '推荐', '镇江：女子强闯地铁车厢 头发被车门连夹6站！', 'http://pic.rmb.bdstatic.com/96f68afd6806b80141681112ec6fd807.jpg@h_218,w_146', '2017-05-07', '热点'),
(5, '推荐', '四川泸县高中女生坠楼身亡 死前考试用手机被发现', 'https://t11.baidu.com/it/u=1384055293,3628141142&fm=170&s=7121B0548DD9BA5B083BE48B0300F0CB&w=218&h=146&img.JPEG', '2017-05-03', '网易要闻'),
(6, '推荐', '“解冻民族资产”骗局升级 投入65元坐收几十万？', 'https://t11.baidu.com/it/u=699848173,850551748&fm=170&s=EFF110D6FE4E74C804C905C40300A072&w=218&h=146&img.JPEG', '2017-05-15', '热点'),
(7, '推荐', '女儿长什么样？林心如：睫毛很长，像爸爸', 'https://t11.baidu.com/it/u=1787468044,608984712&fm=170&s=7D11E51B5F735B9E4ECD0BEB0300E026&w=218&h=146&img.JPEG', '2017-05-05', '搜狐要闻'),
(8, '推荐', '广州一女子强闯地铁车厢 头发被车门连夹6站', 'http://pic.rmb.bdstatic.com/04471a23697b7aebe8342b370ac85958.jpg@h_218,w_146', '2017-05-03', '网易要闻'),
(9, '百家', '中国互联网重新定义世界格局：中美引领全球', 'https://t10.baidu.com/it/u=3380376147,1232131337&fm=170&s=9CB141945AC221432EC642B90300700E&w=218&h=146&img.PNG', '2017-05-03', '热点'),
(10, '百家', '过程中为适应环境的变化而建立起来的暂时神经联', 'https://t12.baidu.com/it/u=2347068353,1577362826&fm=170&s=BE1006CF5EE37E17733F4CFD0300101A&w=218&h=146&img.JPEG', '2017-05-05', '新浪'),
(11, '百家', '元接触的部位，是控制信息传递的关键部位', 'https://t10.baidu.com/it/u=2686064256,477882816&fm=170&s=D2143AC57C937E534035C40C03002057&w=218&h=146&img.JPEG', '2017-05-10', '新浪'),
(12, '百家', '重磅牛股推荐：北方导航 三聚环保 长江电力 中国国航 首创股份 华域汽车 上港集团', 'https://t12.baidu.com/it/u=32302337,3570217545&fm=170&s=35186433DB6A7C0B00C15DC20300A0B1&w=218&h=146&img.PNG', '2017-05-01', '新浪'),
(13, '百家', '遇车金融：金融行业要想良性发展，需要规避哪些问题', 'https://t12.baidu.com/it/u=4269196337,2457922426&fm=170&s=2850EF145158F0295AD151680300E070&w=218&h=146&img.JPEG', '2017-05-10', '新浪'),
(14, '百家', '白百何离婚声明为“人造”？颁奖典礼早范冰冰冷场，一切洗白变得苍白无力！', 'https://t11.baidu.com/it/u=2179039111,2993089945&fm=170&s=57348665168B77514604B1DD030080A3&w=218&h=146&img.JPEG', '2017-05-03', '新浪'),
(15, '百家', '陈晓一个动作成功帮赵丽颖解围，贾静雯却只能拿一瓶水缓解尴尬', 'https://t10.baidu.com/it/u=2501621985,1777871018&fm=170&s=F80F48945A8830D4963B55960300C0A8&w=218&h=146&img.JPEG', '2017-05-02', '新浪'),
(16, '本地', '张云松任首钢女篮主帅：该“狠”的时候不心软', 'https://t12.baidu.com/it/u=526233494,2127098535&fm=170&s=EE8061890A514BCE66906EF303001006&w=218&h=146&img.JPEG', '2017-05-02', '热点'),
(17, '本地', '滴滴、神州等5家在京经营网约车平台获经营许可', 'https://t11.baidu.com/it/u=2222290573,4277614621&fm=170&s=4A09C80B14F34580D6FD7D7203005030&w=218&h=146&img.JPEG', '2017-05-13', 'O2O'),
(18, '本地', '2017北京中考择校及志愿填报', 'https://t11.baidu.com/it/u=3790507258,2372491064&fm=170&s=6EF072DE15C1CD4B58DD327A03004074&w=218&h=146&img.JPEG', '2017-05-04', '中考'),
(19, '本地', '2017ChinaGT中国超跑锦标赛北京站车手积分榜', 'https://t11.baidu.com/it/u=3625196485,955944099&amp;fm=170&amp;s=3490E533BF21710B0A64F9DD030050B1&amp;w=218&amp;h=146&amp;img.JPEG', '2017-05-10', '赛车'),
(20, '本地', '当心！北京36℃高温来了，这份清凉小贴士请收好！', 'https://t11.baidu.com/it/u=205745737,807751465&fm=170&s=0831CD1049C26CC80048594F0300E0F0&w=218&h=146&img.JPEG', '2017-05-01', '热点'),
(21, '本地', '中国电信北京研究院与瑞斯康达宣布共建联合研发实验室', 'https://t12.baidu.com/it/u=2129631512,1523490387&fm=170&s=9B72488506233D11D2002DB703001005&w=218&h=146&img.JPEG', '2017-05-02', '新浪');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
