<?php

use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    /**
     * Home
     */
    Route::inertia('/', 'home')->name('home');

    /**
     * Login
     */
    Route::controller(LoginController::class)->group(function () {
        Route::post('/login', 'login')->name('login');
        Route::post('/logout', 'logout')->name('logout');
        Route::inertia('/login', 'login')->name('login.edit');
    });

    /**
     * Register
     */
    Route::post('/register', RegisterController::class)->name('register');
    Route::inertia('/register', 'register')->name('register.edit');
});

Route::middleware(['auth', 'verified'])->group(function () {

    /**
     * Projects
     */
    Route::controller(ProjectController::class)->group(function () {
        Route::get('/projects', 'index')->name('project.index');
        Route::get('/projects/create', 'create')->name('project.create');
        Route::post('/projects/store', 'store')->name('project.store');
    });

    /**
     * Email Verification
     */
    Route::controller(EmailVerificationController::class)->group(function () {
        Route::get('/email/verify', 'show')
            ->withoutMiddleware('verified')
            ->name('verification.notice');

        Route::post('/email/verify/resend', 'resend')
            ->middleware('throttle:6,1')
            ->withoutMiddleware('verified')
            ->name('verification.send');

        Route::get('/email/verify/{id}/{hash}', 'verify')
            ->middleware('signed')
            ->withoutMiddleware('verified')
            ->name('verification.verify');
    });

    /**
     * Logout
     */
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
});
