<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Consultation;
use Illuminate\Http\Request;

class ConsultationController extends Controller 
{
    public function index()
    {
        return Consultation::select([
            'id',
            'full_name as name',
            'email',
            'phone',
            // Removed interest alias
            'description as message',
            'is_read',
            'created_at'
        ])->orderBy('created_at', 'desc')->get();
    }

    public function storeConsultation(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required',
            // Removed business_type validation
            'description' => 'required',
        ]);

        $consultation = Consultation::create($validated);

        return response()->json(['message' => 'Success', 'data' => $consultation], 201);
    }

    public function toggleRead($id)
    {
        $consultation = Consultation::findOrFail($id);
    
        // Because of the cast in the Model, this flips true/false correctly
        $consultation->is_read = !$consultation->is_read;
        $consultation->save();
    
        return response()->json([
            'success' => true, 
            'is_read' => $consultation->is_read
        ]);
    }

    public function destroy($id)
    {
        $consultation = Consultation::find($id);
        if (!$consultation) return response()->json(['message' => 'Consultation not found'], 404);
        $consultation->delete();
        return response()->json(['message' => 'Consultation deleted successfully'], 200);
    }
}