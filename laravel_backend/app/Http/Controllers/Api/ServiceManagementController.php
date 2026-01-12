<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ServiceManagementController extends Controller
{
    /**
     * Get all services
     */
    public function index() 
    {
        return response()->json(['data' => Service::all()]);
    }

    /**
     * Store a new service with image upload
     */
    public function store(Request $request) 
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'features' => 'required', // Received as JSON string from FormData
            'icon_name' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // Handle Image Upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('services', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        $validated['slug'] = Str::slug($request->title);
        
        // Decode features string back into a PHP array for database JSON column
        $validated['features'] = json_decode($request->features);

        $service = Service::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Service created successfully',
            'data' => $service
        ], 201);
    }

    /**
     * Update an existing service
     */
    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'features' => 'required',
            'icon_name' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        // Handle Image Update
        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($service->image) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $service->image));
            }
            
            $path = $request->file('image')->store('services', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        $validated['slug'] = Str::slug($request->title);
        $validated['features'] = json_decode($request->features);

        $service->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Service updated successfully',
            'data' => $service
        ]);
    }

    /**
     * Remove a service and its image
     */
    public function destroy($id)
    {
        $service = Service::findOrFail($id);

        // Delete associated image file from storage
        if ($service->image) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $service->image));
        }

        $service->delete();

        return response()->json([
            'success' => true,
            'message' => 'Service deleted successfully'
        ]);
    }
}