<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function show($url)
    {
        return view('app', Helpers::requirements('show'));
    }
}
