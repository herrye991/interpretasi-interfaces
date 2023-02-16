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
Route::resource('/article', ArticleController::class)->only(['index', 'show']);

Route::group(['prefix' => 'account'], function() {
    Route::group(['prefix' => 'accept'], function() {
        Route::get('/{token}', [AuthController::class, 'verify']);
    });
    Route::group(['prefix' => 'reset'], function() {
        Route::get('/{token}', [AuthController::class, 'reset']);
        Route::post('/{token}', [AuthController::class, 'resetPost']);
    });
    
});
