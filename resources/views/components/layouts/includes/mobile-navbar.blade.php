<div class="slide-bar">
    <div class="close-mobile-menu">
        <a href="#javascript:void(0);"><i class="fal fa-times"></i></a>
    </div>
    <nav class="side-mobile-menu d-lg-none">
        <div class="header-mobile-search">
            <form action="#" method="get">
                <input type="search" name="s" id="search-id" value="" placeholder="Search Here">
                <button type="submit"><i class="ti-search"></i></button>
            </form>
        </div>
        <div class="menu-primary-menu-container">
            <ul id="pfy-mobile-menu" class="menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767"><a href="#">Utama</a></li>
                @foreach ($first_categories as $row)
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767"><a href="#">{{ $row->name }}</a></li>
                @endforeach
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767">
                    <a href="#index.html" aria-current="page">Lainnya</a>
                    <ul class="sub-menu">
                        @foreach ($etc_categories as $row)
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12 current_page_item menu-item-1721"><a href="#" aria-current="page">{{ $row->name }}</a></li>
                        @endforeach
                    </ul>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767"><a href="#">Login</a></li>
            </ul>
        </div>
    </nav>
</div>