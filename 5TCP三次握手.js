/* TCP三次握手：
在发送数据之前，客户端和服务端要建立连接，所谓的建立连接其实就是双方都保存有对方的信息
TCP三次握手的意义在于：客户端和服务端都能知道对方的接收和发送能力正常。

1.客户端向服务端发送数据包，服务端收到数据包，说明客户端的发送能力正常

2.服务端接收到数据包之后，向客户端发送数据包，客户端接收的服务端的数据包之后，说明服务端的接受和发送能力正常

3.客户端继续向服务端发送数据包，服务端接受到数据包之后，说明客户端的接受能力也正常

 */