    var conn = new WebIM.connection({
        https: WebIM.config.https,
        url: WebIM.config.xmppURL,
        isAutoLogin: WebIM.config.isAutoLogin,
        isMultiLoginSessions: WebIM.config.isMultiLoginSessions
    });

    conn.listen({
        onOpened: function ( message ) {           //连接成功回调
            // 如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
            // 手动上线指的是调用conn.setPresence(); 如果conn初始化时已将isAutoLogin设置为true
            // 则无需调用conn.setPresence();
            console.log(message);

            // 手动设置上线
            conn.setPresence();

            joinRoom();

            sendRoomText();
        },  
        onClosed: function ( message ) {
            console.log(message);
        },                                         //连接关闭回调
        onTextMessage: function ( message ) {},    //收到文本消息
        onEmojiMessage: function ( message ) {},   //收到表情消息
        onPictureMessage: function ( message ) {}, //收到图片消息
        onCmdMessage: function ( message ) {},     //收到命令消息
        onAudioMessage: function ( message ) {},   //收到音频消息
        onLocationMessage: function ( message ) {},//收到位置消息
        onFileMessage: function ( message ) {},    //收到文件消息
        onVideoMessage: function (message) {
            var node = document.getElementById('privateVideo');
            var option = {
                url: message.url,
                headers: {
                  'Accept': 'audio/mp4'
                },
                onFileDownloadComplete: function (response) {
                    var objectURL = WebIM.utils.parseDownloadResponse.call(conn, response);
                    node.src = objectURL;
                },
                onFileDownloadError: function () {
                    console.log('File down load error.')
                }
            };
            WebIM.utils.download.call(conn, option);
        },   //收到视频消息
        onPresence: function ( message ) {},       //处理“广播”或“发布-订阅”消息，如联系人订阅请求、处理群组、聊天室被踢解散等消息
        onRoster: function ( message ) {},         //处理好友申请
        onInviteMessage: function ( message ) {},  //处理群组邀请
        onOnline: function () {
            console.log("onOnline")
        },                                         //本机网络连接成功
        onOffline: function () {
            console.log("onOffline")
        },                                         //本机网络掉线
        onError: function ( message ) {
            console.log(message)
        },                                         //失败回调
        onBlacklistUpdate: function (list) {       //黑名单变动
            // 查询黑名单，将好友拉黑，将好友从黑名单移除都会回调这个函数，list则是黑名单现有的所有好友信息
            console.log(list);
        },
        onReceivedMessage: function(message){},    //收到消息送达客户端回执
        onDeliveredMessage: function(message){},   //收到消息送达服务器回执
        onReadMessage: function(message){},        //收到消息已读回执
        onCreateGroup: function(message){},        //创建群组成功回执（需调用createGroupNew）
        onMutedMessage: function(message){}        //如果用户在A群组被禁言，在A群发消息会走这个回调并且消息不会传递给群其它成员
    });

    var username = 'kaikeba-fjkdsjfkdsh';
    var password = 'password';
    var chatRoomId = '24072074362881';

    // var options = { 
    //     username: 'kaikeba-fjkdsjfkdsh',
    //     password: 'password',
    //     nickname: 'nickname',
    //     appKey: WebIM.config.appkey,
    //     success: function () {
    //      console.log("success")
    //     },  
    //     error: function (message) {
    //      console.log(message)
    //     }, 
    //     apiUrl: WebIM.config.apiURL
 //    }; 
 //    conn.registerUser(options);

    var options = { 
        apiUrl: WebIM.config.apiURL,
        user: username,
        pwd: password,
        appKey: WebIM.config.appkey
    };
    conn.open(options);

    // var options = {
    //     apiUrl: WebIM.config.apiURL,
    //     user: username,
    //     pwd: 'password',
    //     appKey: WebIM.config.appkey,
    //     success: function (token) {
    //         var token = token.access_token;
    //         console.log(token)
    //         WebIM.utils.setCookie('webim_' + username, token, 1);
    //     },
    //     error: function(){
 //     }
    // };
    // conn.open(options);

    var joinRoom = function () {
        console.log("joinRoom")
        // 加入聊天室
        conn.joinChatRoom({
            roomId: chatRoomId // 聊天室id
        });
    };

    // 聊天室发送文本消息
    var sendRoomText = function () {
        console.log("sendRoomText");
        // var _box = document.getElementById('box');
        var id = conn.getUniqueId();         // 生成本地消息id
        console.log('message id: ' + id);
        var msg = new WebIM.message('txt', id); // 创建文本消息
        var option = {
            msg: $('.msg-box').val(),          // 消息内容
            to: chatRoomId,               // 接收消息对象(聊天室id)
            roomType: true,
            chatType: 'chatRoom',
            success: function () {
                var _msg = msg.value;
                console.log(_msg);

                if ( _msg ) {
                    $('#box').append("<div class='visitor-item' style='text-align:right;'><div class='visitor-info'><i class='avator'></i><span class='name'>籼米</span><span class='time'>18:06</span></div><p class='visitor-msg'>"+_msg+"</p></div>");
                }
            },
            fail: function () {
                console.log('failed');
            }
        };
        msg.set(option);
        msg.setGroup('groupchat');
        conn.send(msg.body);
    };
    // 发送消息后，输入框置空
    var clearMessage = function () {
        $('.msg-box').val("");
    }
    // 点击发送按钮发送消息
    $('.send-btn').on('click', function() {if($('.msg-box').val()){sendRoomText();clearMessage();}});