<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::inertia('/', 'home')->name('home');
});

});
