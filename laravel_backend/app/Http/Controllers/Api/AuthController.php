<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // 1. Validate the incoming request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2. Find the user by email
        $user = User::where('email', $request->email)->first();

        // 3. Check password
        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'The credentials you provided are incorrect.'
            ], 401);
        }

        // 4. Generate the Sanctum Token
        $token = $user->createToken('admin_token')->plainTextToken;

        // 5. Return the exact structure your React app needs
        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => [
                'name' => $user->name,
                'email' => $user->email
            ]
        ]);
    }
}