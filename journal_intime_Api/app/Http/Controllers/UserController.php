<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
    public function registerUser(Request $request) {
        $user = User::create([
            'username' => $request->input('username'),
            'password' => $request->input('password'),
        ]);

        return response("Inscription réussie", 201);
    }

    public function getUserByUsernameAndPasswordd(Request $request) {
        $users = User::all();
        $username = $request->input('username');
        $password = $request->input('password');

        foreach($users as $user) {
            if(($user->username == $username) && ($user->password == $password))
                return response()->json($user);
        }
        return response("User not found");
    }
}
