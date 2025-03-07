<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    /**
     * Home
     */
    Route::inertia('/', 'home')->name('home');

    /**
     * Password
     */
    Route::controller(PasswordController::class)->group(function () {
        Route::inertia('/forgot-password', 'forgot-password')->name('password.forgot');
        Route::post('/forgot-password', 'require')->name('password.require');

        Route::get('/reset-password', 'create')->name('password.create');
        Route::post('/reset-password', 'reset')->name('password.reset');
    });

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
        Route::get('/projects', 'index')->name('projects.index');
        Route::get('/projects/create', 'create')->name('projects.create');
        Route::post('/projects/store', 'store')->name('projects.store');
        Route::get('/projects/{project}/edit', 'edit')->name('projects.edit');
        Route::put('/projects/{project}/update', 'update')
            ->can('update', 'project')
            ->name('projects.update');
    });

    /**
     * Account
     */
    Route::controller(AccountController::class)->group(function () {
        Route::get('/account', 'edit')->name('account.edit');
        Route::post('/account/update', 'update')->name('account.update');
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
