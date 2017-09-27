var container = document.getElementById("player");     
flowplayer(container, {
    clip: {
        sources: [
              { type: "application/x-mpegurl",
                src:  "http://pili-live-hls.kaikeba.com/kaikeba/huodong_2.m3u8" },
            // { type: "video/flash",
            //     src:  "rtmp://pili-live-rtmp.kaikeba.com/kaikeba/huodong_2" }
        ]
    }
});