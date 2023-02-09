<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;

class AppController extends Controller
{
    public function index () {
        /** Categories */
        $first_categories = $this->fetchCategory('first');
        $etc_categories = $this->fetchCategory('etc');
        $all_categories = $this->fetchCategory('all');
        /** End Categories */
        /** Popular Posts */
        $populars = $this->fetchArticle('populars');
        /** End Popular Posts */
        /** Trending Posts */
        $trendings = $this->fetchArticle('trendings');
        /** End Trending Posts */
        return view('app', compact(
            ['first_categories', 'etc_categories', 'all_categories', 'populars', 'trendings']
        ));
    }

    public function fetchCategory($type) {
        if($type == 'first') {
            $categories = Category::take(4)->get();
        }
        if($type == 'etc') {
            $categories = Category::skip(4)->take(4)->get();
        }
        if($type == 'all') {
            $categories = Category::get();
        }
        return $categories;
    }

    public function fetchArticle($type) {
        if ($type == 'populars') {
            $articles = Article::with('category')->take(3)->orderBy('viewers', 'desc')->get();
        }
        if ($type == 'trendings') {
            $articles = Article::where('trending', '1')->take(4)->orderBy('viewers', 'desc')->get();
        }
        return $articles;
    }
}
