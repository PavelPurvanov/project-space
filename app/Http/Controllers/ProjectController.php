<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
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

    public function create()
    {
        return inertia('projects-create');
    }

    public function store(StoreProjectRequest $request)
    {
        $request->user()->projects()->create([
            'name' => $request->validated('name'),
        ]);

        return to_route('project.index');
    }
}
