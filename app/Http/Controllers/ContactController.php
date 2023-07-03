<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(ContactRequest $request)
    {
        $request->validated();

        try {
            Contact::insert([
                'name' => $request->name,
                'email' => $request->email,
                'text' => $request->text,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]);

            return response('The request succeeded, and a new resource was created as a result.', 201);

        } catch (\Throwable $th) {
            return response('Unprocessable Entity. The request was well-formed but was unable to be followed due to semantic errors.', 422);
        }
        

        

    }
}
