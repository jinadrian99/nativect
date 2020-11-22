<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rates;

class RatesController extends Controller
{
    public function index()
    {
        return Rates::all();
    }

    public function store(Request $request)
    {
        return Rates::create($request->all());
    }

    public function show($id)
    {
        $Rates = Rates::findOrFail($id);
        return $Rates;
    }

    public function update(Request $request, $id)
    {
        $Rates = Rates::findOrFail($id);
        $Rates->update($request->all());
        return Rates::findOrFail($id);
    }

    public function destroy($id)
    {
        $Rates = Rates::findOrFail($id);
        $Rates->delete();
        return 204;
    }
}
