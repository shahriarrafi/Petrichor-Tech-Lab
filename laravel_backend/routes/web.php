<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

Route::get('/', function () {
    return 'Laravel Backend is running! API is at /api';
});

// 1. FIXED SETUP ROUTE
Route::get('/setup-database', function () {
    try {
        // 'migrate:fresh' drops all tables and runs all migrations from scratch
        Artisan::call('migrate:fresh', ['--force' => true]);
        
        return "<h1>Success!</h1><p>Database wiped and all tables recreated.</p><pre>" . Artisan::output() . "</pre>";
    } catch (\Exception $e) {
        return "<h1>Error Running Migrations</h1><pre>" . $e->getMessage() . "</pre>";
    }
});

// 2. FIXED ADMIN CREATION
Route::get('/create-initial-admin', function () {
    // This will update the user if they exist, or create them if they don't
    $user = \App\Models\User::updateOrCreate(
        ['email' => 'contact@petrichortechlab.com'],
        [
            'name' => 'Admin',
            'password' => \Illuminate\Support\Facades\Hash::make('GAfE97%na@8ka')
        ]
    );

    return "Admin updated. Try logging in with: contact@petrichortechlab.com and GAfE97%na@8ka";
});

Route::get('/fix-storage-final', function () {
    $target = storage_path('app/public'); // Automatically gets the full /home/user/... path
    $shortcut = base_path('../public_html/storage');

    if (file_exists($shortcut) || is_link($shortcut)) {
        is_link($shortcut) ? unlink($shortcut) : rename($shortcut, $shortcut . '_old');
    }

    if (symlink($target, $shortcut)) {
        return "<h1>Success!</h1><p>Target: $target</p><p>Shortcut: $shortcut</p>";
    }
    return "Failed to create link.";
});

Route::get('/fix-read-column', function () {
    \App\Models\Consultation::whereNull('is_read')->update(['is_read' => false]);
    return "Old consultations updated to unread status.";
});

Route::get('/clear-all-cache', function () {
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('route:clear');
    return "<h1>All Caches Cleared!</h1>";
});