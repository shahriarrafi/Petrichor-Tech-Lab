<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up()
{
    Schema::create('services', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('slug')->unique(); // for the path: /services/web-app
        $table->text('description');
        $table->string('image');
        $table->json('features'); // We will store the array here
        $table->string('icon_name')->default('Layout'); // Lucide icon name string
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
