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
        'ngayHetHan',
        'email',
        'sdt',
        'loaiThe',
        'nganHang',
        'tenThe',
        'soThe'
    ];
    public function booking(){
        return $this->hasMany('App\Models\Booking','idKH','idKH');
    }
}
