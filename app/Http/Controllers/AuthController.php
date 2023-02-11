<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use App\Models\PasswordReset;
use App\Models\User;
use App\Models\Verify;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->now = Carbon::now();
    }

    public function verify($token, Request $request)
    {
        if ($request->header('Accept') == 'application/json') {
            $verify = Verify::where('created_at', '>=', $this->now->subDays(1)->toDateTimeString())
            ->where('token', $token)->first();
            if (!is_null($verify)) {
                $user = User::where('id', $verify->user_id)->first();
                if (is_null($user->email_verified_at)) {
                    $user->update([
                        'email_verified_at' => $this->now,
                    ]);
                    return $verify;
                }
                $verify->delete();
            }
        } else {
            $type = 'email-verified';
            return view('components.empty', compact(['type']));
        }
    }

    public function reset($token, Request $request)
    {
        if ($request->header('Accept') == 'application/json') {
            $reset = PasswordReset::where('created_at', '>=', $this->now->subMinutes(15)->toDateTimeString())
            ->where('token', $token)->first();
            if (!is_null($reset)) {
                return response()->json(['validity' => true, 'token' => csrf_token()]);
            }
            return response()->json(['validity' => false, 'token' => null]);
        }
        $type = 'reset-password';
        return view('components.empty', compact('type'));
    }

    public function resetPost(Request $request, $token)
    {
        $request->validate([
            'password' => 'confirmed|min:6'
        ]);
        $reset = PasswordReset::where('created_at', '>=', $this->now->subMinutes(15)->toDateTimeString())
        ->where('token', $token)->first();
        if (!is_null($reset)) {
            User::where('email', $reset->email)->update([
                'password' => Hash::make($request->password)
            ]);
            $reset->delete();
            return 'Password Updated!';
        }
        return 'Token expired!';
    }
}
