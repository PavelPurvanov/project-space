<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\GroupResource;
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

    public function show(Project $project)
    {
        return inertia('projects-show', [
            'groups' => GroupResource::collection($project->groups),
            'project' => ProjectResource::make($project),
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

    public function edit(Project $project)
    {
        return inertia('projects-edit', [
            'project' => ProjectResource::make($project),
        ]);
    }

    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update([
            'name' => $request->validated('name'),
        ]);

        return to_route('project.index');
    }
}
