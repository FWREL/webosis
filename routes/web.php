<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PublicController;
use App\Http\Controllers\DashboardController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('media-informasi', function () {
//     return view('media');
// });

Route::get('/', [PublicController::class, 'index']);
Route::get('/media-informasi', [PublicController::class, 'media']);


Route::group(['middleware' => ['auth'], 'prefix' => 'dashboard'], function() {
    Route::get('/', [DashboardController::class, 'index']);
});

require __DIR__.'/auth.php';
