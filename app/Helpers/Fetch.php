<?php

namespace App\Helpers;
use App\Models\Article;
use App\Models\Category;

class Fetch
{
    public static function articles($type = null)
    {
        if ($type == 'populars') {
            $articles = Article::with('category')->take(3)->orderBy('viewers', 'desc')->get();
        }
        if ($type == 'trendings') {
            $articles = Article::where('trending', '1')->take(4)->orderBy('viewers', 'desc')->get();
        }
        return $articles;
    }

    public static function categories($type = null)
    {
        if($type == 'first') {
            $categories = Category::take(4)->get();
        }
        if($type == 'etc') {
            $categories = Category::skip(4)->take(7)->get();
        }
        if($type == 'all') {
            $categories = Category::get();
        }
        return $categories;
    }
}