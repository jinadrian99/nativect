<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Aman\EmailVerifier\EmailChecker;

class SendMailController extends Controller
{
    public function checkExistMail(Request $request){
        $real = app(EmailChecker::class)->checkEmail($request->email);
        return $real["success"]? 'true': 'false';
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
                            <td width="350">
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
                                Your name: '. $request->hoTen .'
                            </td>
                            <td>
                                Ngày booking: '. $request->dateBooking .'
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Your Email: '. $request->email .'
                            </td>
                            <td>
                                ID Booking: '. $request->idDP .'
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Phone num: '. $request->sdt .'
                            </td>
                            <td>
                                Room: '. $request->tenLP .'
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                Arrive: '. $request->startDate .'
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                Depart: '. $request->endDate .'
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><hr></td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center; padding-top: 20px">
                                <h3>
                                    Total Price: <span>'. $request->totalPrice .' VND</span>
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
            return 'sent: success';
        } catch (Exception $e) {
            // return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            return 'sent: fail';
        }
    }
}
