<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ConsultationController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ServiceManagementController;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::get('/test', function() { return ['status' => 'ok']; });
Route::get('/services', [ServiceManagementController::class, 'index']);
Route::post('/consultation', [ConsultationController::class, 'storeConsultation']);
Route::post('/auth/login.php', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| Protected Admin Routes
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {
    
    // Admin Stats
    Route::get('/admin/stats', function () {
        return ['status' => 'Authorized!'];
    });

    // Consultations Management
    Route::get('/admin/consultations', [ConsultationController::class, 'index']);
    Route::delete('/admin/consultations/{id}', [ConsultationController::class, 'destroy']);
    Route::patch('/admin/consultations/{id}/toggle-read', [ConsultationController::class, 'toggleRead']);

    // Services Management
    Route::post('/services', [ServiceManagementController::class, 'store']); 
    Route::put('/services/{id}', [ServiceManagementController::class, 'update']); // Use PUT for updates
    Route::delete('/services/{id}', [ServiceManagementController::class, 'destroy']);
    
});