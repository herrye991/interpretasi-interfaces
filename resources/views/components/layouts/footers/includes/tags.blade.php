<div class="tagcloud">
    @foreach ($all_categories as $row)
    <a href="#tag/apps/index.html" class="tag-cloud-link tag-link-21 tag-link-position-1" style="font-size: 13.833333333333pt;" aria-label="{{ $row->name }}">{{ $row->name }}</a>
    @endforeach
</div>