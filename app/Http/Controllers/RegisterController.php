<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;

class RegisterController
{
    public function __invoke(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->validated('name'),
            'email' => $request->validated('email'),
            'password' => Hash::make($request->validated('password')),
        ]);

        $user->addMedia(public_path('images/avatar.png'))
            ->preservingOriginal()
            ->toMediaCollection(User::AVATAR_COLLECTION_KEY);

        event(new Registered($user));

        auth()->login($user);

        return to_route('verification.notice');
    }
}
