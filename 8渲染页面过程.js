/* 
渲染页面的过程:
1.解析html生成DOM树
2.解析css生成CSSOM树
3.解析js,可能会对DOOM和样式修改
4.根据DOM树和CSSOM树,生成渲染树(render Tree)
5.分层:根据层叠上下文属性,将渲染树的节点进行分层
6.生成图层绘制指令
7.栅格化:将图层划分为图块
8.合成和显示
 */