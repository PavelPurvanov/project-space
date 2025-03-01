<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

class AccountController
{
    public function edit()
    {
        return inertia('account');
    }

    public function update(UpdateUserRequest $request)
    {
        $user = $request->user();

        $user->update([
            'name' => $request->validated('name'),
            'email' => $request->validated('email'),
        ]);

        if ($request->file('avatar')->isValid()) {
            $user->clearMediaCollection(User::AVATAR_COLLECTION_KEY);

            $user->addMediaFromRequest('avatar')
                ->toMediaCollection(User::AVATAR_COLLECTION_KEY);
        }

        return to_route('account.edit');
    }
}
