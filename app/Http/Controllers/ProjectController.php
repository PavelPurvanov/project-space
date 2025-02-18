<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;

class ProjectController
{
    public function index()
    {
        $projects = Project::all();

        return inertia('projects', [
            'projects' => ProjectResource::collection($projects),
        ]);
    }
}
