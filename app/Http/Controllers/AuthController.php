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
            "password" => "required|min:8|confirmed",
        ], $messages = [
            "login.required" => "Login jest wymagany",
            "email.required" => "Email jest wymagany",
            "email.email" => "Email musi być poprawny",
            "email.unique" => "Podany email jest już zajęty",
            "password.min" => "Hasło musi mieć co najmniej 8 znaków",
            "password.confirmed" => "Hasła nie zgadzają się",
        ]);

        $user = User::create([
            "name" => $data["login"],
            "email" => $data["email"],
            "password" => Hash::make($data["password"]),
        ]);

        return response()->json([
            "message" => "Konto utworzone",
            "user" => $user,
        ]);
    }

    public function resetPassword(Request $rq) {

    }
}
