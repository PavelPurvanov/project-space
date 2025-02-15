<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::controller(ProjectController::class)->group(function () {
    Route::get('/projects', 'index')->name('project.index');
});
