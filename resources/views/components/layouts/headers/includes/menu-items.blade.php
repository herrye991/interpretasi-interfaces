<ul id="menu-primary-menu" class="navigation clearfix">
    <li class="menu-item menu-item-type-post_type menu-item-object-page">
        <a href="{{ url('/') }}">Utama</a>
    </li>
    @foreach ($first_categories as $row)
    <li class="menu-item menu-item-type-post_type menu-item-object-page">
        <a href="{{ url('category/'.$row->unique_name) }}">{{ $row->name }}</a>
    </li>
    @endforeach
    <li id="menu-item-1729" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1729">
        <a href="javascript:void(0);">Lainnya</a>
        <ul class="sub-menu">
            @foreach ($etc_categories as $row)
            <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="{{ url('category/'.$row->unique_name) }}">{{ $row->name }}</a>
            </li>
            @endforeach
        </ul>
    </li>

</ul>