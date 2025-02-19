<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::inertia('/', 'home')->name('home');

    Route::controller(LoginController::class)->group(function () {
        Route::post('/login', 'login')->name('login');
        Route::post('/logout', 'logout')->name('logout');
        Route::inertia('/login', 'login')->name('login.edit');
    });
});

Route::middleware('auth')->group(function () {
    Route::controller(ProjectController::class)->group(function () {
        Route::get('/projects', 'index')->name('project.index');
    });
});
