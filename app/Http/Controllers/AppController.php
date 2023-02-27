<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Article;
use App\Models\Category;
use App\Models\User;
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

    public function tag()
    {
        return view('app', Helpers::requirements('tag'));
    }

    public function user($id, $name)
    {
        User::where('id', $id)
        ->whereRaw("REPLACE(`name`, ' ', '') = ? ", $name)
        ->firstOrFail();
        return view('app', Helpers::requirements('user'));
    }
}
