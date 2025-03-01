<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', 'min:3'],
            'email' => ['required', 'email'],
            'avatar' => ['required', 'file', 'mimes:jpeg,png,jpg', 'max:'.config('media-library.max_file_size')],
        ];
    }
}
