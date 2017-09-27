<div class="pm-wrap">
     <section class="navigation hidden-sm hidden-xs" style="display: none;">
            <div class="container">
                <a class="anchor" href="{{"/course/"+courseId+"#data"}}">关于UXD</a>
                <a class="anchor" href="{{"/course/"+courseId+"#efficient"}}">学习路径</a>
                <a class="anchor" href="{{"/course/"+courseId+"#faq"}}">常见问题</a>
                <a class="anchor" href="{{"/course/"+courseId+"#scheme"}}">学习方案</a>
                <a class="contact-teacher" href="javascript:openwin();">联系学习导师</a>
            </div>
        </section>
        <section id="detailsBanner" data-img="{{ courseDetails.data.bigpic }}" class="banner">
            <div class="container">
                <div class="banner-tit">
                    {{courseDetails.data.name}}
                    <p>{{courseDetails.data.desc}}</p>
                </div>
            </div>
        </section>
        <section class="data clearfix" id='data'>
            <div class="container">
                <p class="tit">UXD全能设计师正在成为企业主流高薪人才</p>
                <div class="container">
                    
                        <img src="http://i.kaikeba.com/FjOvCv9S_K8E7n147jG3rt0-hcz8" alt="">
                  
                </div>
            </div>
        </section>
        <section class="efficient" id='efficient'>
            <div class="container">
                <p class="tit">
                    课程大纲 & 学习路径
                </p>
                {% for item in section %}
                <div class="system real">
                    <div class="circle-white">
                        <div class="circle-red">{{ loop.index }}</div>
                    </div>
                    <p>{{ item.title }}</p>
                    <div class="eff-txt">{{item.description}}</div>
                    <div class="course-ctt clearfix">
                        <span class="txt">课程内容</span>
                        <span class="item1 glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                    </div>
                    <div class="ctt-box item1-box" style="display: none;">
                        <table class="table">
                        {% for item in item.subs %}
                            {% if item.type == 0 %}
                                <tr>
                                    <td style="background: #F8F8F8;"><a style="float: left;display:block;color:#6C7881" href="{{ urlConfig.student + "/course/"+courseId+"/study/" + item.subid}}" >{{loop.index + "."}}{{ item.title }}</a>
                                    <a href="{{ urlConfig.student + "/course/"+courseId+"/study/" + item.subid}}" style="display:block;width:31px;height:30px;float: right;background: url(../../img/pm/go.png) no-repeat;background-size: 100% 100%;"></a>
                                    </td>
                                    <td style="background: #F1F1F1;width: 25%;"><a style="width:100%;display:block;color:#6C7881" href="{{ urlConfig.student + "/course/"+courseId+"/study/" + item.subid}}" >{{item.v_total}}课时</a></td>
                                </tr> 
                            {% else %}
                                <tr>
                                    <td style="background: #F8F8F8;"><a style="float: left;display:block;color:#6C7881" href="{{ urlConfig.student + "/course/"+courseId+"/practise/" + item.practiseid}}" >{{loop.index + "."}}{{ item.title }}</a>
                                <a style="display:block;width:81px;height:30px;float: right;background: url(../../img/pm/realaction.png) no-repeat;background-size: 100% 100%;"></a>
                                <td style="background: #F1F1F1;width: 25%;"><a style="width:100%;display:block;color:#6C7881" href="{{ urlConfig.student + "/course/"+courseId+"/practise/" + item.practiseid}}" >实训任务</a></td>
                            {% endif %}
                        {% endfor %}
                        </table>
                    </div>
                </div>
                {% endfor %}
            </div>
        </section>
        
        <section class="teach container">
            <p class="tit">优质师资团队由中国UXD职业教育创始人范舟领衔</p>
            <ul class="row">
                <li class="col-md-4">
                    <div class="li-box">
                        <div class="tea-avatar">
                            <img src="http://i.kaikeba.com/Fm07_GN7qSOSrliXPCVrS3CV6MXb" alt="">
                        </div>
                        <p class="name">范舟<span>Knight.Fan</span></p>
                        <p class="desc">
                            莱茵教育创始人，殿堂级艺术设计导师，设计创新专家，知名美学顾问。北京工业大学、浪潮集团、方正国际、HP、三星研究院、湖北美术学院特聘创新设计讲师。培养设计人才超过10000名。
                        </p>
                        <p class="case">
                            <span class="success">- 成功案例 -</span>
                            <span class="item item1">深圳航空电商</span>
                            <span class="item item2">海尔智能家电</span>
                            <span class="item item3">中信网银</span>
                        </p>
                    </div>
                </li>
                <li class="col-md-4">
                    <div class="li-box">
                        <div class="tea-avatar">
                            <img src="http://i.kaikeba.com/FmHYlrYm0b_IyR_aeKRJ0qhDTDQA" alt="">
                        </div>
                        <p class="name">佟小敬<span>Mila</span></p>
                        <p class="desc">
                            中科院计算所用户体验特聘讲师，10年交互设计项目总监经验，国内第一批交互设计师（07年开始交互设计生涯）128个大型交互设计项目经验    </p>
                        <p class="case">
                            <span class="success">- 成功案例 -</span>
                            <span class="item item1">华胜天成云计算系统</span>
                            <span class="item item2">广典SNS手机客户端
                            <span class="item item3">中国铁建平台标准一体化项目</span>
                        </p>
                    </div>
                </li>
                <li class="col-md-4">
                    <div class="li-box">
                        <div class="tea-avatar">
                            <img src="http://i.kaikeba.com/Fp0zRdqGuQUin_0NiRnmxeMQoWDu" alt="">
                        </div>
                        <p class="name">李明玉<span>Jade</span></p>
                        <p class="desc">
                            曾任职于北京今日之最文化传媒公司担任《鸟巢一代》《青春》《中国民族》等杂志的美术编辑，精通PS、AI、ID，对AE、Axure、Muse、木疙瘩等熟练操作。                        </p>
                        <p class="case">
                            <span class="success">- 成功案例 -</span>
                            <span class="item item1">甘茶度餐饮</span>
                            <span class="item item2">新乡规划馆</span>
                            <span class="item item3">孙中山纪念馆</span>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
         <section class="character">
            <div class="container">
                <p class="tit">在线学习不等于看视频<br>通过科技创新的力量，事实上更能保障学习效果。</p>
                <ul class="row">
                    <li class="col-md-3 col-xs-6">
                        <img src="http://i.kaikeba.com/FnCyuqQKFanN2IJKlpUAgroLMGdg" alt="">
                        <span>录播视频</span>
                        <p>系统掌握知识体系<br>随时随地学习</p>
                    </li>
                    <li class="col-md-3 col-xs-6">
                        <img src="http://i.kaikeba.com/FmPVZQr71xoYASTuniPV4xkdSJu7" alt="">
                        <span>互动直播</span>
                        <p>掌握实战应用方法<br>剖析大量商业案例</p>
                    </li>
                    <li class="col-md-3 col-xs-6">
                        <img src="http://i.kaikeba.com/FidFqcSNLgRl-LqOWbghFIp2MLbC" alt="">
                        <span>实战演练</span>
                        <p>场景化、游戏化教学
                        <br>真实项目实战层层深入</p>
                    </li>
                    <li class="col-md-3 col-xs-6">
                        <img src="http://i.kaikeba.com/FjE7QscVeOoNMcFNCW61Guux5ptU" alt="">
                        <span>一对一辅导</span>
                        <p>专业知识一对一交流<br>人才顾问一对一辅导</p>
                    </li>
                </ul>
                <div class="path hidden-sm hidden-xs">
                    <img src="http://i.kaikeba.com/FshqZAaHy7o3n7SpQMA07ZVW5llx" alt="">
                    <p>高效的系统学习成长路径</p>
                </div>
                <div class="grid-line row  hidden-sm hidden-xs">
                    <img class="center-block col-md-8 col-sm-8" src="/img/pm/grid.png" alt="">
                </div>
                <div class="steps row  hidden-sm hidden-xs">
                    <div class="col-md-3 col-sm-3">
                        <div class="stage">
                            <div>
                                <img src="http://i.kaikeba.com/FhOnX6NXGD7O2Fe3nVIONuf8lCS4" alt="">
                            </div>
                            <span>1</span>
                            <p>学习知识体系</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="stage arrow">
                            <div>
                                <img src="http://i.kaikeba.com/Fvrqrydq-gHINvB-Dy6-pCfOsH1U" alt="">
                            </div>
                            <span>2</span>
                            <p>实战演练</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="stage arrow">
                            <div>
                                <img src="http://i.kaikeba.com/FnXJPzViu257hFj8be5KdX3zKun9" alt="">
                            </div>
                            <span>3</span>
                            <p>总结分享</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="stage arrow">
                            <div>
                                <img src="http://i.kaikeba.com/Fuh7FHnsmHBcDHxdcmyypZJ49YNH" alt="">
                            </div>
                            <span>4</span>
                            <p>创新 . 作品</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        
           <section class="faq" id="faq">
            <div class="container">
                <p class="tit">FAQ</p>
                <div class="col-md-6">
                    <div class="item">
                        <p class="question">
                            <span>Q:</span>课程是如何学习的？
                        </p>
                        <span>A:</span>
                        <div class="answer">
                            录播课程：随时随地即可在开课吧学习，并有小书童智慧学习管理系统全程陪伴。直播课程：通过优秀互动直播技术，课堂体验犹如亲临现场；若因特殊情况缺课，都可以随时观看回放，不会影响学习进度。整个学习过程，包括毕业后，我们都提供答疑服务及线下互动服务。
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <p class="question">
                            <span>Q:</span>课程的特色以及优势有哪些？
                        </p>
                        <span>A:</span>
                        <div class="answer">
                            课程的授课理念是场景化、实战化、案例化，所有课程的设置均结合企业真实的岗位需求来设定，极具实用性的以就业为学习结果导向的系统化职业课程。整个课程体系由浅入深，从系统知识框架到实践运用，通过符合学习认知规律的教学方式方法，使学员切实提高自己设计能力。
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <p class="question">
                            <span>Q:</span>为什么选择线上学习？
                        </p>
                        <span>A:</span>
                        <div class="answer">
                            线上学习不受时间和空间的限制，能最大化实现教育公平化，视频的特性可以满足新人学习反复复习巩固的需求，同时通过在线直播实战、即时互动、课后辅导、任务实时跟踪，最大化还原一线产品团队工作场景的情景化教学方式，提供真实产品实战项目学习，课程时间安排灵活方便，在职在校皆可轻松学习。
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <p class="question">
                            <span>Q:</span>如何保证学的会？
                        </p>
                        <span>A:</span>
                        <div class="answer">
                            小班教学保障同学们都能获得一对一辅导服务；设计基础培养、企业案例解析、实时互动答疑、定期线上+线下讲座。同时，在教学管理上，施行考核制：每项知识均设置有考试内容，考试合格方可进入下一环节，保障每个阶段都能融会贯通。
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <p class="question">
                            <span>Q:</span>线上课程怎么进行实战学习？    
                        </p>
                        <span>A:</span>
                        <div class="answer">
                            5年互联网教育积淀，让我们对做在线实战项目轻车熟路。实战录播课程反复看，先预习，软件和基础课程掌握扎实。预先发送实战准备资料，预讨论分组讲解、剖析项目，传授实战方法。学员随时互动，专业老师解答，确保无疑点；老师点评项目库成果，督促修改；定期会议保障增强沟通能力与沟通效率提升。
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <p class="question">
                            <span>Q:</span>企业没有uxd的岗位，学习完后可以做什么工作？
                        </p>
                        <span>A:</span>
                        <div class="answer">
                            UXD全能设计师是集UI（用户界面设计）、ID（交互设计）、UX（用户体验设计）、DESIGN（跨媒体设计）以及设计管理于一身，兼具美、德、法等国际前沿性设计理念的复合型人才，是真正符合企业需要的设计人才。
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="scheme" id='scheme'>
            <div class="container">
                <p class="tit">应该是国内唯一升级UXD全能设计的解决方案</p>
                <div class="col-md-6 col-md-offset-3">
                    <div class="scheme-item scheme-jing">
                        <div class="tit-box">
                            <p class="scheme-name">精英方案</p>
                            <p class="scheme-use">适用于渴望极速成才的设计新人</p>
                        </div>
                        <div class="ctt-box">
                            <p class="scheme-des">3个月即可完美掌控2-3年级别设计能力的：理论体系、方法论体系、专业应用技巧及场景解决方案能力。</p>
                            <hr>
                            <a href="{{"/signup/"+courseId+"/2?courseId="+courseId}}" class="scheme-more">立即报名</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
<script type="text/javascript" src="https://aiak8.kuaishang.cn/bs/ks.j?cI=418723&fI=36356" charset="utf-8"></script>
<script type="text/javascript">
  function openwin(text){
   if(KS && KS.openDirChatWin){
    var win=$("#k_s_ol_chatWin");
    if(win.length>0){
        if(win.is(':visible')){
            win.addClass("bounce");
            var a=setTimeout(function(){
                win.removeClass("bounce");
            },1000);
        }
    }
    KS.openDirChatWin({sText:text});
   }else{
    var a=setTimeout(openwin,1000);
   }
  }
</script>