<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [AppController::class, 'index']);
Route::get('/article/{url}', [AppController::class, 'show']);
Route::get('/category/{name}', [AppController::class, 'category']);
Route::get('/search', [AppController::class, 'search']);
Route::get('/tag/{tag}', [AppController::class, 'tag']);
Route::get('/user/{id}/{name}', [AppController::class, 'user']);

Route::group(['prefix' => 'account'], function() {
    Route::get('/signin', [AuthController::class, 'signin']);
    Route::get('/signup', [AuthController::class, 'signup']);
    Route::get('/forgot', [AuthController::class, 'forgot']);
    Route::group(['prefix' => 'accept'], function() {
        Route::get('/{token}', [AuthController::class, 'verify']);
    });
    Route::group(['prefix' => 'reset'], function() {
        Route::get('/{token}', [AuthController::class, 'reset']);
        Route::post('/{token}', [AuthController::class, 'resetPost']);
    });
});
