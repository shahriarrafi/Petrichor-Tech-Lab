<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consultation extends Model
{
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        // business_type removed
        'description'
    ];
    
    protected $casts = [
        'is_read' => 'boolean',
    ];
}