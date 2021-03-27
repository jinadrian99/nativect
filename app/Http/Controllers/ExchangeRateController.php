<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExchangeRateController extends Controller
{
    private function getRate($sys){
        $json = file_get_contents('https://api.currencyfreaks.com/latest?apikey=7685b1894fea4404b7d8edac19ecbb08');
        $rate = $sys;
        $exchangeRate = json_decode($json)->rates->$rate;
        $fmRate = number_format($exchangeRate, 2, ',', '.');
        return $fmRate;
    }

    private function getCurrency($sys){
        $json = file_get_contents('https://api.currencyfreaks.com/currency-symbols');
        $rate = $sys;
        $Currency = json_decode($json)->$rate;
        return $Currency;
    }

    public function getExchangeRate(){
        $data = ['VND', 'EUR', 'GBP', 'CAD','CNY'];
        $stack = array();
        foreach($data as $key => $value){
            // var_dump($this->getRate($value));
            // var_dump($this->getCurrency($value));
            //array_push($stack,$this->getRate($value),$this->getCurrency($value));
            array_push($stack, (object)[
                'symbol' => $value,
                'rate' => $this->getRate($value),
                'currency' => $this->getCurrency($value),
            ]);
        }
        return $stack;
    }
}
