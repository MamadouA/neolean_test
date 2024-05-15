<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EntryController;
use App\Http\Controllers\UserController;



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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/entries/getEntry/{id_entry}', [EntryController::class, 'getEntryById']);
Route::get('/entries/{id_user}', [EntryController::class, 'getEntries']);
Route::get('/entries/delete/{id}', [EntryController::class, 'deleteEntry']);
Route::post('/entries', [EntryController::class, 'storeEntry']);
Route::post('/entries/update/{id}', [EntryController::class, 'updateEntry']);


Route::get('/users/getUser', [UserController::class, 'getUserByUsernameAndPasswordd']);
Route::post('/users', [UserController::class, 'registerUser']);
