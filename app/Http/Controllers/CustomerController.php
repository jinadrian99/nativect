<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use model Customer
use App\Models\Customer;
// use resource for Customer
// use App\Http\Resources\Customer as CustomerResource;

class CustomerController extends Controller
{
    public function index(){
        return Customer::all();
    }

    public function show($id){
        $Customer = Customer::findOrFail($id);
        return $Customer;
    }

    public function store(Request $request){
        return Customer::create($request->all());
    }

    public function update(Request $request, $id){
        $Customer = Customer::findOrFail($id);
        $Customer->update($request->all());
    }

    public function destroy($id)
    {
        $Customer = Customer::findOrFail($id);
        $Customer->delete();
        return 204;
    }
}
