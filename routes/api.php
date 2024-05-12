<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(AuthController::class)->prefix("auth")->group(function () {
        foreach ([
            "login",
            "register",
            "reset-password",
        ] as $endpoint) {
            Route::withoutMiddleware("auth:sanctum")->post($endpoint, Str::camel($endpoint));
        }

        Route::get('user', fn (Request $request) => $request->user());
        Route::post("logout", "logout");
    });
});
