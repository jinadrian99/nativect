<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{
    public $timestamps = false;
    protected $table = 'loaiphong'; //sync table name
    protected $primaryKey = 'idLP';
    protected $fillable=[
        'tenLP', 
        'hinhAnh',
        'moTa',
        'slPhongTrong'   
    ];
    public function rates(){
        return $this->hasMany('App\Models\Rates','idLP','idLP');
    }
}
