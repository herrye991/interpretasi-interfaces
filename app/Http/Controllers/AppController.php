<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index () {
        return view('app', Helpers::requirements('index'));
    }

    public function show($url)
    {
        Article::where('url', $url)->firstOrFail();
        return view('app', Helpers::requirements('show'));
    }

    public function category($name)
    {
        Category::where('unique_name', $name)->firstOrFail();
        return view('app', Helpers::requirements('category'));
    }

    public function search()
    {
        return view('app', Helpers::requirements('search'));
    }
}
