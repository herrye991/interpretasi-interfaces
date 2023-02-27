<div class="slide-bar">
    <div class="close-mobile-menu">
        <a href="#"><i class="fal fa-times"></i></a>
    </div>
    <nav class="side-mobile-menu d-lg-none">
        <div class="header-mobile-search">
            <form action={{ url('search') }} method="get">
                <input type="search" name="q" value="" placeholder="Percarian ...">
                <button type="submit"><i class="ti-search"></i></button>
            </form>
        </div>
        <div class="menu-primary-menu-container">
            <ul id="pfy-mobile-menu" class="menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767"><a href="{{ url('/') }}">Utama</a></li>
                @foreach ($first_categories as $row)
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767"><a href="{{ url('category/'.$row->unique_name) }}">{{ $row->name }}</a></li>
                @endforeach
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767">
                    <a href="#" aria-current="page">Lainnya</a>
                    <ul class="sub-menu">
                        @foreach ($etc_categories as $row)
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12 current_page_item menu-item-1721"><a href="{{ url('category/'.$row->unique_name) }}" aria-current="page">{{ $row->name }}</a></li>
                        @endforeach
                    </ul>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1767"><a href="#">Login</a></li>
            </ul>
        </div>
    </nav>
</div>
