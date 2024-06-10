<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    use HasApiTokens;

    public function login(Request $rq) {
        $data = $rq->validate([
            "login" => "required|string",
            "password" => "required|min:8",
        ]);

        $user = User::where("name", $data["login"])->first();
        if (!$user || !Hash::check($data["password"], $user->password)) {
            return response()->json([
                "message" => "Niepoprawne dane logowania",
            ], 401);
        }

        $token = $user->createToken($user->name . "-AuthToken")->plainTextToken;
        return response()->json([
            "access_token" => $token,
        ]);
    }

    public function logout(Request $rq) {
        $rq->user()->currentAccessToken()->delete();
        return response()->json(["message" => "Wylogowano"]);
    }

    public function register(Request $rq) {
        $data = $rq->validate([
            "login" => "required|string",
            "email" => "required|string|email|unique:users",
            "password" => "required|min:8",
        ]);

        $user = User::create([
            "name" => $data["login"],
            "email" => $data["email"],
            "password" => Hash::make($data["password"]),
        ]);

        return response()->json([
            "message" => "Konto utworzone",
        ]);
    }

    public function resetPassword(Request $rq) {

    }
}
