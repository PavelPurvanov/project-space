<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::inertia('/', 'home')->name('home');
});

Route::middleware('auth')->group(function () {
    Route::controller(ProjectController::class)->group(function () {
        Route::get('/projects', 'index')->name('project.index');
    });
});
