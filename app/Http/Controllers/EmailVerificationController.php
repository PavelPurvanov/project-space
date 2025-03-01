<?php

namespace App\Http\Controllers;

use Closure;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;

class EmailVerificationController implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            function (Request $request, Closure $next) {
                if ($request->user()->hasVerifiedEmail()) {
                    return to_route('project.index');
                }

                return $next($request);
            },
        ];
    }

    public function show()
    {
        return inertia('verify-email');
    }

    public function verify(EmailVerificationRequest $request)
    {
        $request->fulfill();

        return to_route('project.index');
    }

    public function resend(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();

        return back()->with('status', 'success');
    }
}
