<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    use HasApiTokens;

    public function login(Request $rq) {
        $data = $rq->validate([
            "login" => "required|string",
            "password" => "required|min:8",
        ], $messages = [
            "login.required" => "Login jest wymagany",
            "password.required" => "Hasło jest wymagane",
            "password.min" => "Hasło musi mieć co najmniej 8 znaków",
        ]);

        if (Auth::attempt([
            "name" => $data["login"],
            "password" => $data["password"]
        ])) {
            $rq->session()->regenerate();
            return response()->json(["message" => "Zalogowano"]);
        }

        return response()->json(["message" => "Niepoprawny login lub hasło"], 401);
    }

    public function logout(Request $rq) {
        $rq->session()->invalidate();
        $rq->session()->regenerateToken();
        return response()->json(["message" => "Wylogowano"]);
    }

    public function register(Request $rq) {
        $data = $rq->validate([
            "login" => "required|string|unique:users,name",
            "email" => "required|string|email|unique:users",
            "password" => "required|min:8|confirmed",
        ], $messages = [
            "login.required" => "Login jest wymagany",
            "login.unique" => "Podany login jest już zajęty",
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
