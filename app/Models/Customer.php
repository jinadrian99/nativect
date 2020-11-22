<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public $timestamps = false;
    protected $table = 'khachhang'; //sync table name
    protected $primaryKey = 'idKH';
    protected $fillable=[
        'tenKH', 
        'soThe', 
        'ngayHetHan',
        'email',
        'password'
    ];
    public function booking(){
        return $this->hasMany('App\Models\Booking','idKH','idKH');
    }
}
