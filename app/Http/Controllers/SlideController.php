<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slide;
use File;

class SlideController extends Controller
{
    public function uploadFile(Request $req){
        if($req->hasFile('data')){
            $file = $req->file('data');
            $new_name = time().'_'.$file->getClientOriginalName();

            $file->move('image', $new_name);
            return $new_name;
        }
        return 'Không có hình';
    }

    public function deleteFile(Request $req){
        if($req->hinhAnhSlide){
            File::delete(public_path().$req->hinhAnhSlide);
            return true;
        }
        return false;
    }

    public function index()
    {
        return Slide::all();
    }

    public function store(Request $request)
    {
        $request->validate([
                'hinhAnh'=>'required'
            ],
            [
                'hinhAnh.required'=>'Bạn chưa nhập dữ liệu hình ảnh'
            ]
        );
        return Slide::create($request->all());
    }

    public function show($id)
    {
        $slide = Slide::findOrFail($id);
        return $slide;
    }

    public function update(Request $request, $id)
    {
        $request->validate([
                'hinhAnh'=>'required'
            ],
            [
                'hinhAnh.required'=>'Bạn chưa nhập dữ liệu hình ảnh'
            ]
        );
        $slide = Slide::findOrFail($id);
        $slide->update($request->all());
    }

    public function destroy($id)
    {
        $slide = Slide::findOrFail($id);
        $slide->delete();
        return 204;
    }
}
