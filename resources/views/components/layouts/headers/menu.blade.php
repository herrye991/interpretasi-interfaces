<div id="stickyHeader" class="header-menu">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-8 col-lg-8 col-md-7">
                <div class="mainmenu">
                    <div class="site-navigation">
                        @include('components.layouts.headers.includes.menu-items')
                    </div>
                </div>
            </div>
            <div class="hamburger_menu d-lg-none">
                <a href="#" class="active">
                    <div class="icon bar">
                        <span><i class="far fa-bars"></i></span>
                    </div>
                </a>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-5">
                <form method="get" action={{ url('search') }}>
                    <div class="header-right d-flex justify-content-end align-items-center">
                        @include('components.layouts.headers.includes.search')
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>