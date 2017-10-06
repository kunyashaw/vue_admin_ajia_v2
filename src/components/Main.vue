<template>
    <div id="admin-main" class="nav-md">

        <div class="container body">
            <div class="main_container">
                <div class="col-md-3 left_col">
                    <div class="left_col scroll-view">
                        <div class="navbar nav_title" style="border: 0;">
                            <a href="index.html" class="site_title"><img src="../assets/img/favicon.ico" alt="">&nbsp;&nbsp;
                                <span>学子商城后台</span>
                            </a>
                        </div>

                        <div class="clearfix"></div>

                        <!-- menu profile quick info -->
                        <div class="profile clearfix">
                            <div class="profile_pic">
                                <img src="../assets/img/user.png" alt="..." class="img-circle profile_img">
                            </div>
                            <div class="profile_info">
                                <span>欢迎回来,</span>
                                <h2>超级管理员</h2>
                            </div>
                        </div>
                        <!-- /menu profile quick info -->

                        <br/>

                        <!-- sidebar menu -->
                        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                            <div class="menu_section">
                                <ul class="nav side-menu">
                                    <li class="active">
                                        <a href="index.html">
                                            <i class="fa fa-home"></i>后台首页</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu_section">
                                <h3>数据管理</h3>
                                <ul class="nav side-menu">
                                    <li>
                                        <a>
                                            <i class="fa fa-laptop"></i> 商品管理
                                            <span class="fa fa-chevron-down"></span>
                                        </a>
                                        <ul class="nav child_menu">
                                            <li>
                                                <!-- <a href="product_list.html">商品列表</a> -->
                                                <router-link to="/productList">商品列表</router-link>
                                            </li>
                                            <li>
                                                <a href="product_search.html">多条件搜索</a>
                                            </li>
                                            <li>
                                                <a href="product_add.html">添加商品</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>
                                            <i class="fa fa-user"></i> 用户管理
                                            <span class="fa fa-chevron-down"></span>
                                        </a>
                                        <ul class="nav child_menu">
                                            <li>
                                                <!-- <a href="user_list.html">用户列表</a> -->
                                                <router-link to="/userList">用户列表</router-link>
                                            </li>
                                            <li>
                                                <a href="user_search.html">用户检索</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>
                                            <i class="fa fa-shopping-cart"></i>
                                            订单管理
                                            <span class="fa fa-chevron-down"></span>
                                        </a>
                                        <ul class="nav child_menu">
                                            <li>
                                                <a href="order_list.html">订单列表</a>
                                            </li>
                                            <li>
                                                <a href="order_search.html">搜素订单</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu_section">
                                <h3>内容管理</h3>
                                <ul class="nav side-menu">
                                    <li>
                                        <a>
                                            <i class="fa fa-life-ring"></i> 首页商品管理
                                            <span class="fa fa-chevron-down"></span>
                                        </a>
                                        <ul class="nav child_menu">
                                            <li>
                                                <a href="e_commerce.html">轮播广告</a>
                                            </li>
                                            <li>
                                                <a href="projects.html">首页推荐</a>
                                            </li>
                                            <li>
                                                <a href="contacts.html">最新上架</a>
                                            </li>
                                            <li>
                                                <a href="project_detail.html">热销单品</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>
                                            <i class="fa fa-windows"></i> 功能页面
                                            <span class="fa fa-chevron-down"></span>
                                        </a>
                                        <ul class="nav child_menu">
                                            <li>
                                                <a href="page_403.html">403错误页面</a>
                                            </li>
                                            <li>
                                                <a href="page_404.html">404错误页面</a>
                                            </li>
                                            <li>
                                                <a href="page_500.html">500错误页面</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <!-- /sidebar menu -->

                        <!-- /menu footer buttons -->
                        <div class="sidebar-footer hidden-small">
                            <a data-toggle="tooltip" data-placement="top" title="Settings">
                                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                            </a>
                            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                            </a>
                            <a data-toggle="tooltip" data-placement="top" title="Lock">
                                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                            </a>
                            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                            </a>
                        </div>
                        <!-- /menu footer buttons -->
                    </div>
                </div>

                <!-- top navigation -->
                <div class="top_nav">
                    <div class="nav_menu">
                        <nav>
                            <div class="nav toggle">
                                <a id="menu_toggle">
                                    <i class="fa fa-bars"></i>
                                </a>
                            </div>

                            <ul class="nav navbar-nav navbar-right">
                                <li class="">
                                    <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <img src="../assets/img/user.png">超级管理员
                                        <span class=" fa fa-angle-down"></span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-usermenu pull-right">
                                        <li>
                                            <a href="javascript:;"> 基本信息 </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <span class="badge bg-red pull-right">50%</span>
                                                <span>用户设置</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">使用说明</a>
                                        </li>
                                        <li>
                                            <a href="login.html">
                                                <i class="fa fa-sign-out pull-right"></i> 退出登录</a>
                                        </li>
                                    </ul>
                                </li>

                                <li role="presentation" class="dropdown">
                                    <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-envelope-o"></i>
                                        <span class="badge bg-green">6</span>
                                    </a>
                                    <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                                        <li>
                                            <a>
                                                <span class="image"><img src="img/user.png" alt="Profile Image" /></span>
                                                <span>
                                                    <span>新用户注册</span>
                                                    <span class="time">3分钟以前</span>
                                                </span>
                                                <span class="message">
                                                    用户编号：3，用户名：doudou，完成注册。通过官网“邮件注册”功能实现注册。
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span class="image"><img src="img/user.png" alt="Profile Image" /></span>
                                                <span>
                                                    <span>用户下单</span>
                                                    <span class="time">10小时以前</span>
                                                </span>
                                                <span class="message">
                                                    用户编号：1，用户名：dingding，完成下单。系统中当有已有未处理订单37件。
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span class="image"><img src="img/user.png" alt="Profile Image" /></span>
                                                <span>
                                                    <span>用户信息修改</span>
                                                    <span class="time">1天以前</span>
                                                </span>
                                                <span class="message">
                                                    用户编号：1，用户名：dingding，通过官网“用户设置”功能完成个人基础信息修改。
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span class="image"><img src="img/user.png" alt="Profile Image" /></span>
                                                <span>
                                                    <span>新用户注册</span>
                                                    <span class="time">5天以前</span>
                                                </span>
                                                <span class="message">
                                                    用户编号：1，用户名：dingding，完成注册。通过官网“用户注册”功能实现注册。
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <div class="text-center">
                                                <a>
                                                    <strong>查看所有消息</strong>
                                                    <i class="fa fa-angle-right"></i>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!-- /top navigation -->

                <!-- page content -->
                <div class="right_col" role="main">
                    <router-view></router-view>

                    <br>
                </div>
                <!-- /page content -->

                <!-- footer content -->
                <footer>
                    <div class="pull-right">
                        学子商城 — 后台管理系统。 访问商城主页：
                        <a href="http://www.codeboy.com/" target="_blank">学子商城</a>
                    </div>
                    <div class="clearfix"></div>
                </footer>
                <!-- /footer content -->
            </div>
        </div>

    </div>

    <!-- <router-view></router-view> -->
</template>

<script>
export default {
    data: function() {
        return {
            msg: 'Main',
            $BODY: null,
            $MENU_TOGGLE: null,
            $SIDEBAR_MENU: null,
            $SIDEBAR_FOOTER: null,
            $LEFT_COL: null,
            $RIGHT_COL: null,
            $NAV_MENU: null,
            $FOOTER: null
        }
    },
    methods: {
        setContentHeight() {
            // reset height
            this.$RIGHT_COL.css('min-height', $(window).height());

            var bodyHeight = this.$BODY.outerHeight(),
                footerHeight = this.$BODY.hasClass('footer_fixed') ? -10 : this.$FOOTER.height(),
                leftColHeight = this.$LEFT_COL.eq(1).height() + this.$SIDEBAR_FOOTER.height(),
                contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

            // normalize content
            contentHeight -= this.$NAV_MENU.height() + footerHeight;
            this.$RIGHT_COL.css('min-height', contentHeight);
        }
    },
    mounted() {
        this.$BODY = $('#admin-main');
        this.$MENU_TOGGLE = $('#menu_toggle');
        this.$SIDEBAR_MENU = $('#sidebar-menu');
        this.$SIDEBAR_FOOTER = $('.sidebar-footer');
        this.$LEFT_COL = $('.left_col');
        this.$RIGHT_COL = $('.right_col');
        this.$NAV_MENU = $('.nav_menu');
        this.$FOOTER = $('footer');
        console.log(this.$MENU_TOGGLE);

        this.$MENU_TOGGLE.on('click', () => {
            console.log(this.$BODY);

            if (this.$BODY.hasClass('nav-md')) {
                this.$SIDEBAR_MENU.find('li.active ul').hide();
                this.$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
            } else {
                this.$SIDEBAR_MENU.find('li.active-sm ul').show();
                this.$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
            }

            this.$BODY.toggleClass('nav-md nav-sm');

            this.setContentHeight();
        });

        this.$SIDEBAR_MENU.find('a').on('click', (ev) => {
            console.log('clicked - sidebar_menu');
            console.log('$(ev.target)', $(ev.target));
            var $li = $(ev.target).parent();
            console.log("$li.parent()", $li);
            console.log("$li.is('.active')", $li.is('.active'));
            if ($li.is('.active')) {
                $li.removeClass('active active-sm');
                $('ul:first', $li).slideUp(() => {
                    this.setContentHeight();
                });
            } else {
                // prevent closing menu if we are on child menu
                console.log("!$li.parent().is('.child_menu')", !$li.parent().is('.child_menu'));
                if (!$li.parent().is('.child_menu')) {
                    this.$SIDEBAR_MENU.find('li').removeClass('active active-sm');
                    this.$SIDEBAR_MENU.find('li ul').slideUp();
                } else {
                    if (this.$BODY.is(".nav-sm")) {
                        this.$SIDEBAR_MENU.find("li").removeClass("active active-sm");
                        this.$SIDEBAR_MENU.find("li ul").slideUp();
                    }
                }
                $li.addClass('active');

                $('ul:first', $li).slideDown(() => {
                    this.setContentHeight();
                });
            }
        });
    }
}
</script>

<style>

</style>


