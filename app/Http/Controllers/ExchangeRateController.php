<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExchangeRateController extends Controller
{
    public function getRate($sys, $for){
        $json = file_get_contents('https://api.currencyfreaks.com/latest?apikey=7685b1894fea4404b7d8edac19ecbb08');
        $rate = $sys;
        $exchangeRate = json_decode($json)->rates->$rate;
        $fmRate = $for==0 ? number_format($exchangeRate, 2, ',', '.') : $exchangeRate;
        return $fmRate;
    }

    public function getCurrency($sys){
        $json = file_get_contents('https://api.currencyfreaks.com/currency-symbols');
        $rate = $sys;
        $Currency = json_decode($json)->$rate;
        return $Currency;
    }

    public function getExchangeRate(){
        $data = ['VND', 'EUR', 'GBP', 'CAD', 'CNY'];
        $stack = array();
        foreach($data as $key => $value){
            // var_dump($this->getRate($value));
            // var_dump($this->getCurrency($value));
            //array_push($stack,$this->getRate($value),$this->getCurrency($value));
            array_push($stack, (object)[
                'symbol' => $value,
                'rate' => $this->getRate($value, 0),
                'currency' => $this->getCurrency($value),
            ]);
        }
        return $stack;
    }

    public function getExchangeRateFromVND(Request $req){
        $moneyVND = intval($req->priceVND);
        if(is_numeric($moneyVND))
        {
            $data = ['VND', $req->needSym];
            $stack = array();
            foreach($data as $key => $value){
                array_push($stack, $this->getRate($value, 1));
            }
            $result = ($moneyVND/(float)$stack[0])*(float)$stack[1];
            $result = number_format(round($result,2), 2, ',', '.');
            return $result;
        }
        else    
            echo("Tiền Phải là số");
    }
}
