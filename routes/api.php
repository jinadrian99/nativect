<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::Resource('customer', 'App\Http\Controllers\CustomerController');
Route::Resource('room_types', 'App\Http\Controllers\RoomTypeController');
Route::get('room_type_rate/{id}','App\Http\Controllers\RoomTypeController@findRateForRoom');
Route::post('room_types_upload_file', 'App\Http\Controllers\RoomTypeController@uploadFile');
Route::post('room_types_delete_file', 'App\Http\Controllers\RoomTypeController@deleteFile');

Route::Resource('bookings', 'App\Http\Controllers\BookingController');
Route::Resource('rates', 'App\Http\Controllers\RatesController');

Route::resource('slides','App\Http\Controllers\SlideController');
Route::post('slides_upload_file', 'App\Http\Controllers\SlideController@uploadFile');

Route::resource('admin_accounts','App\Http\Controllers\AdminAccountController');
Route::post('admin_login','App\Http\Controllers\AdminAccountController@login');

Route::post('exist_mail','App\Http\Controllers\SendMailController@checkExistMail');
Route::post('send_mail','App\Http\Controllers\SendMailController@sendMail');

// Route::get('register','RegisterController@index');
// Route::post('register','RegisterController@store');
// Route::put('register/{id}','RegisterController@update');
// Route::delete('register/{id}','RegisterController@delete');

//  admin
// Route::get('customers','Admin\RegisterController@index');
// Route::post('register','RegisterController@store');
// Route::put('register/{id}','RegisterController@update');
// Route::delete('register/{id}','RegisterController@delete');
