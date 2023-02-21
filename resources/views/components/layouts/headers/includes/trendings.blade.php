<div class="tp-news-ticker">
    <div class="breaking-heading"><i class="far fa-fire-alt"></i> Trending News:</div>
    <div class="pfy-breakingnews">
        <ul class="breaking-headline-active owl-carousel">
            @foreach ($trendings as $row)
            @php
            $title = $row->title;
            if(strlen($row->title)  >= 60) {
                $title = substr($row->title, 0, 60) . '...';
            };
            @endphp
            <li><a title="{{ $row->title }}" href="{{ url('article/' . $row->url) }}">{{ $title }}</a></li>
            @endforeach
        </ul>
    </div>
</div>