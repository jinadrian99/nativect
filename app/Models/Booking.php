<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    public $timestamps = false;
    protected $table = 'datphong'; //sync table name
    protected $primaryKey = 'idDP';  // Không nói j thì mặc định là id 
    protected $fillable=[
        'idLP',
        'idKH',
        'ngayDen',
        'ngayDi',
        'soDem',
        'tongTien'
    ];

    public function customer(){
        return $this->belongsTo('App\Models\Customer','idKH','idKH');
    }
    public function roomType(){
        return $this->belongsTo('App\Models\RoomType','idLP','idLP');
    }
}
