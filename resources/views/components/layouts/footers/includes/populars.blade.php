<div class="recent-posts-widget">
    <div class="pfy-post-grid-wrap grid-style-tb">
    @foreach ($populars as $row)
        <div class="pfy-post-item pfy-scale pfy-img-commn-style">
            <div class="benqu__post-content pfy-scale d-flex">
                <div class="pfy-post-thumb">
                    <a href="{{ url('article/'.$row->url) }}"><img width="640" height="408" src="{{ $row->image }}" class="attachment-large size-large wp-post-image" alt="" decoding="async" loading="lazy" sizes="(max-width: 640px) 100vw, 640px" /></a>
                </div>
                <div class="pfy-post-content">
                    <div class="pfy-post-meta-tb d-flex">
                        <a class="benqu-cate-name" href="{{ url('category/'.$row->category->unique_name) }}" style="font-size:12px; color:#6f5ef3">
                            <span>{{ $row->category->name }}</span>
                        </a>
                        <span class="pfy-post-date"><i class="fal fa-calendar-alt"></i> {{ Carbon\Carbon::parse($row->created_at)->format('M d, Y') }}</span>
                    </div>
                    <h4 class="benqu__post-title pfy-post-title hover-title"><a href="{{ url('article/'.$row->url) }}" rel="bookmark" title="{{ $row->title }}">{{ $row->title }}</a></h4>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>