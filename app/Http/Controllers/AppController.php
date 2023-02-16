<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;

class AppController extends Controller
{
    public function index () {
        return view('app', Helpers::requirements('index'));
    }
}
