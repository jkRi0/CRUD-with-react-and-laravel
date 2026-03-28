<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

Route::apiResource('messages', MessageController::class);