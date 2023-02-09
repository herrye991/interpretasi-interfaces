<div class="tp-news-ticker">
    <div class="breaking-heading"><i class="far fa-fire-alt"></i> Trending News:</div>
    <div class="pfy-breakingnews">
        <ul class="breaking-headline-active owl-carousel">
            @foreach ($trendings as $row)
            <li><a title="{{ $row->title }}" href="#">{{ $row->title }}</a></li>
            @endforeach
        </ul>
    </div>
</div>