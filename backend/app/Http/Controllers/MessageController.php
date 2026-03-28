<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    // GET all messages
    public function index()
    {
        return Message::all();
    }

    // CREATE message
    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required'
        ]);

        return Message::create([
            'message' => $request->message
        ]);
    }

    // GET single message
    public function show($id)
    {
        return Message::findOrFail($id);
    }

    // UPDATE message
    public function update(Request $request, $id)
    {
        $message = Message::findOrFail($id);

        $message->update([
            'message' => $request->message
        ]);

        return $message;
    }

    // DELETE message
    public function destroy($id)
    {
        Message::destroy($id);

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}