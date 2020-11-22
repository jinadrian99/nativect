<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminAccount extends Model
{
    // use HasFactory;
    protected $table = 'admin';
    public $timestamps = false;
    protected $primaryKey = 'idAdmin';
    protected $fillable=['phanQuyen','username','password'];
}
