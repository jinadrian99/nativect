<?php

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

Route::get('/', function () { return view('welcome'); });
Route::get('/room_rates', function(){ return view('welcome'); });
Route::get('/about', function(){ return view('welcome'); });
Route::get('/room/{any}', function(){ return view('welcome'); });
Route::get('/your_basket', function(){ return view('welcome'); });
Route::get('/booking', function(){ return view('welcome'); });
Route::get('/team', function(){ return view('welcome'); });
// Route::get('/login_register', function(){ return view('welcome'); });

Route::group(['prefix' => 'admin'], function () {
    Route::get('/', function () {
        return view('admin.index');
    });
    // Route::get('/customers', function () {
    //     return view('admin.index');
    // });
    // Route::get('/add_customer', function () {
    //     return view('admin.index');
    // });
    // Route::get('/form_customer/{any}', function () {
    //     return view('admin.index');
    // });
    // Route::get('/bills', function () {
    //     return view('admin.index');
    // });
    // Route::get('/slides', function () {
    //     return view('admin.index');
    // });
    // Route::get('/room_types', function () {
    //     return view('admin.index');
    // });
    // Route::get('/admin_accounts', function () {
    //     return view('admin.index');
    // });
    // Route::get('/booking', function () {
    //     return view('admin.index');
    // });
});
