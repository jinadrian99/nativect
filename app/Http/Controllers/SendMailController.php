<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Aman\EmailVerifier\EmailChecker;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\MessageBag;

class SendMailController extends Controller
{
    public function checkExistMail(Request $request){
        // $validator = Validator::make( $request->all(),[
        //     'email'=>'required|min:3',
        //     'tenKH'=>'required'
        // ],[
        //     'email.required'=>'thiếu chữ',
        //     'email.min' => 'ít nhất 3 chữ',
        //     'tenKH.required'=>'thiếu tên'
        // ]);
        
        // if($validator->fails()){
        //     $err=[];
        //     foreach ($validator->errors()->messages() as $key => $value) {
        //         $err[]=$value[0];
        //     }
        //     var_dump($err);
        // }
        // return;

        $real = app(EmailChecker::class)->checkEmail($request->email);
        return $real["success"]? true : false;
    }
    public function sendMail(Request $request)
    {
        // Load Composer's autoloader
        // require 'vendor/autoload.php';

        // Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            $mail->SMTPDebug = 0;                     
            $mail->isSMTP();                                           
            $mail->Host       = 'smtp.gmail.com';                    
            $mail->SMTPAuth   = true;                                   
            $mail->Username   = 'nativehotelct@gmail.com';                    
            $mail->Password   = 'nh@123456';                              
            $mail->SMTPSecure = 'tls';    
            $mail->Port       = 587; 

            $mail->setFrom('nativehotelct@gmail.com', 'Native Hotel');
            $mail->addAddress($request->email, $request->hoTen);    

            $mail->AddEmbeddedImage('image/NativeAva.jpg', 'native_ava');

            $textBody='
                <head>
                    <meta charset="UTF-8" />
                </head>
                <body style="font-family: Arial, Helvetica, sans-serif; color: black">
                    <table style="margin: 0 auto;">
                        <tr>
                            <td width="320">
                                <img
                                width="42"
                                height="42"
                                alt="Native"
                                border="0"
                                style="border: none; padding: 0; margin: 0;"
                                src="cid:native_ava"
                                />
                            </td>
                            <td>
                                <h1 style="margin-top: 20px; text-align:right">Biên Nhận</h3>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><hr></td>
                        </tr>
                        <tr>
                            <td>
                                Name: '. $request->tenKH .'
                            </td>
                            <td>
                                ID Booking: '. $request->idBooking .'
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email: '. $request->email .'
                            </td>
                            <td>
                                Amount room: '. $request->slPhong .'
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Phone: '. $request->sdt .'
                            </td>
                            <td>
                                Room: '. $request->tenLP .'
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Bank: '. (($request->loaiThe==0) ? 'VISA' : (($request->loaiThe==1) ? 'MasterCard' : (($request->loaiThe==2) ? 'Domestic' : ''))) .'_'. (($request->nganHang==0) ? 'BIDV' : (($request->nganHang==1) ? 'Eximbank' : '')) .'
                            </td>
                            <td>
                                Arrive: '. $request->ngayDen .'
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ID CARD: '. $request->soThe .'
                            </td>
                            <td>
                                Depart: '. $request->ngayDi .'
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><hr></td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center; padding-top: 20px">
                                <i>Date Booking: '. $request->ngayDat .'</i>
                                <h3>
                                    Total Price: <span>'. $request->tongTien .' VND</span>
                                </h3> 
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center;">
                                <img
                                    width="24"
                                    height="24"
                                    alt="Native"
                                    border="0"
                                    style="border: none; padding: 0; margin: 0;"
                                    src="cid:native_ava"
                                />
                                <br>
                                <a href="http://nativehotel.herokuapp.com/" target="_blank">
                                    Go to Native
                                </a>
                            </td>
                        </tr>
                    </table>
                </body>
            ';

            $mail->isHTML(true);  
            $mail->CharSet = "UTF-8";                
            $mail->Subject = 'Biên nhận của bạn từ Native';
            $mail->Body    = $textBody;

            $mail->send();
            return 'true';
        } catch (Exception $e) {
            // return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            return 'false';
        }
    }
}
