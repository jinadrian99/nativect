<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rates extends Model
{
    public $timestamps = false;
    protected $table = 'banggia'; //sync table name
    protected $primaryKey = 'idBG';  // Không nói j thì mặc định là id 
    protected $fillable=[
        'idLP',
        'giaLP',
        'timeApDung'
    ];

    public function RoomType(){
        return $this->belongsTo('App\Models\RoomType','idLP','idLP');
    }
}
