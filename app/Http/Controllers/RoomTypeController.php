<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use File;

use App\Models\RoomType;

class RoomTypeController extends Controller
{
    public function uploadFile(Request $req){
        if($req->hasFile('data')){
            $json_name_img = array();
            $files = $req->file('data');
            // $file = $req->file('data'); 
            foreach($files as $file){
                $new_name = time().'_'.$file->getClientOriginalName();

                // echo 'Tên Files: ' . $file->getClientOriginalName();
                // echo '<br/>';

                // //Lấy Đuôi File
                // echo 'Đuôi file: ' . $file->getClientOriginalExtension();
                // echo '<br/>';

                // //Lấy đường dẫn tạm thời của file
                // echo 'Đường dẫn tạm: ' . $file->getRealPath();
                // echo '<br/>';

                // //Lấy kích cỡ của file đơn vị tính theo bytes
                // echo 'Kích cỡ file: ' . $file->getSize();
                // echo '<br/>';

                // //Lấy kiểu file
                // echo 'Kiểu files: ' . $file->getMimeType();
                // echo '<br />';

                $file->move('image', $new_name);

                $json_name_img[] = $new_name;
            }
            return $json_name_img;
            // return $new_name;
        }
        return 'Không có hình';
    }

    public function deleteFile(Request $req){
        if($req->imgRaws!=null){
            $imgRaws = json_decode($req->imgRaws); 
            foreach($imgRaws as $imgRaw){
                File::delete(public_path().$imgRaw);
            }
            return true;
        }
        return false;
    }

    public function findRateForRoom($id){
        // tận dụng chức năng relation của laravel
        $roomtype = RoomType::findOrFail($id);
        $rates = $roomtype->rates;
        // nếu muốn làm tay: cần Model Rates
        // // $rates = Rates::where('idLP','=',$id)->get();

        // $today = new DateTime(date('Y-m-d H:i:s'));
        $today = Carbon::now();

        $dayminrate = null;
        $daymin = null;
        foreach($rates as $rate){
            $dateinrate = Carbon::parse($rate->timeApDung);
            $diff = $today->diff($dateinrate);  
            // var_dump($diff);

            // invert = 1 ngày ấy nhỏ hơn ngày hiện tại
            // invert = 0 ngày ấy lớn hơn ngày hiện tại
            if($diff->invert==1){
                if($dayminrate == null){
                    $dayminrate = $rate;
                } 
                if($daymin == null){
                    $daymin = $diff->days;
                }

                if($diff->days < $daymin){
                    $dayminrate = $rate;
                    $daymin = $diff->days;
                }
            } 
            else {
                if($diff->days == 0){
                    $dayminrate = $rate;
                    $daymin = $diff->days;
                }
            }
        }

        // $dateinrate = Carbon::parse($rates[0]->timeApDung);
        // $diff = $today->diff($dateinrate);
        // print_r($diff);

        return $dayminrate;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RoomType::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return RoomType::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $RoomType = RoomType::findOrFail($id);
        return $RoomType;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $RoomType = RoomType::findOrFail($id);
        $RoomType->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $RoomType = RoomType::findOrFail($id);
        $RoomType->delete();
        return 204;
    }
}
