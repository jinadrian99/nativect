<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdminAccount;
use Hash;

class AdminAccountController extends Controller
{
    public function index()
    {
        return AdminAccount::all();
    }

    public function store(Request $request)
    {
        $request->validate([
                'username'=>'required|min:3',
                'password'=>'required|min:5|max:32'
            ],
            [
                'username.required'=>'Bạn chưa nhập tên người dùng',
                'username.min'=>'Tên người dùng phải ít nhất 3 kí tự',
                'password.required'=>'Bạn chưa nhập mật khẩu',
                'password.min'=>'Mật khẩu phải ít nhất 5 kí tự',
                'password.max'=>'Mật khẩu chỉ tối đa 32 kí tự',
            ]
        );
        $request->offsetSet('password',bcrypt($request->input('password')));
        return AdminAccount::create($request->all());
    }

    public function show($id)
    {
        $admin = AdminAccount::findOrFail($id);
        return $admin;
    }

    public function update(Request $request, $id)
    {
        $request->validate([
                'username'=>'required|min:6'
            ],
            [
                'username.required'=>'Bạn chưa nhập tên người dùng',
                'username.min'=>'Tên người dùng phải ít nhất 6 kí tự'
            ]
        );
        //danh code doan tim kiem id va pass
        // $r = AdminAccount::where([
        //     ['idAdmin',$request->idAdmin],
        //     ['password',$request->password]
        // ])->get();
        $r = AdminAccount::where('idAdmin',$request->idAdmin)->where('password',$request->password)->get();
        if (!count($r)) { //sua lai if(!count($r))
            $request->validate([
                    'password'=>'required|min:6|max:32',
                    // 'passwordAgain'=>'required|same:password'
                ],
                [
                    'password.required'=>'Bạn chưa nhập mật khẩu',
                    'password.min'=>'Mật khẩu phải ít nhất 6 kí tự',
                    'password.max'=>'Mật khẩu chỉ tối đa 32 kí tự',
                    // 'passwordAgain.required'=>'Bạn chưa nhập lại mật khẩu',
                    // 'passwordAgain.same'=>'Mật khẩu nhập lại không đúng'
                ]
                );
            $request->offsetSet('password',bcrypt($request->input('password')));
        }
        $admin = AdminAccount::findOrFail($id);
        // return $request->all();
        $admin->update($request->all());
    }

    public function destroy($id)
    {
        $admin = AdminAccount::findOrFail($id);
        $admin->delete();
        return 204;
    }

    public function login(Request $request)
    {
        $request->validate([
                'username'=>'required|min:6',
                'password'=>'required|min:6|max:32'
            ],
            [
                'username.required'=>'Bạn chưa nhập tên người dùng',
                'username.min'=>'Tên người dùng phải ít nhất 3 kí tự',
                'password.required'=>'Bạn chưa nhập mật khẩu',
                'password.min'=>'Mật khẩu phải ít nhất 5 kí tự',
                'password.max'=>'Mật khẩu chỉ tối đa 32 kí tự',
            ]
        );
        $inputPassword = bcrypt($request->input('password'));

        $results = AdminAccount::where([
            ['username', '=', $request->username]
            // ['password', '=', $inputPassword]
        ])->get();
        if(count($results)) {
            if (Hash::check($request->password, $results[0]->password)) {
                return $results;
            }
            else {
                return response()->json('Sai thông tin login',500);
            }
        }
        else {
            return response()->json('Sai thông tin login',500);
        }    
    }
}
