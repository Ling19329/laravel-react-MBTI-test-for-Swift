<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TestResult;
use App\Http\Resources\TestResult as TestResultResource;

class TestController extends Controller
{
    //
    public function index()
    {
        $player = new TestResult;
        $player->email = "test@gmail.com";

        return $player->save();
    }

    public function show($id)
    {
       
    }

    public function process(Request $request)
    {
        $email = $request->post('email');//email is not used
        $temp = $request->post('data');// data from the test 
        
        
        $array = json_decode($temp);

        $rate_IE = 0;
        $rate_SN = 0;
        $rate_TF = 0;
        $rate_JP = 0;

        foreach($array as $array_item){
            $rate = $array_item->rate -1 ;
            switch ($array_item->id) {
                case '1':
                    $rate_IE += $rate;
                    break;
                case '2':
                    $rate_SN += $rate;
                    break;
                case '3':
                     $rate_TF -= $rate;
                    break;
                case '4':
                     $rate_IE -= $rate;
                    break;
                case '5':
                     $rate_SN -= $rate;
                    break;
                case '6':
                     $rate_JP -= $rate;
                    break;
                case '7':
                     $rate_TF += $rate;
                    break;
                case '8':
                     $rate_JP += $rate;
                    break;
                case '9':
                     $rate_IE -= $rate;
                    break;
                case '10':
                     $rate_JP -= $rate;
                    break;    

                
                default:
                    # code...
                    break;
            }

        }


        $rate_IE = ($rate_IE >= 0)? 0 : 1;
        $rate_SN = ($rate_SN >= 0)? 0 : 1;
        $rate_TF = ($rate_TF >= 0)? 0 : 1;
        $rate_JP = ($rate_JP >= 0)? 0 : 1;
        $perspective = (!$rate_IE?"I":"E").(!$rate_SN?"S":"N").(!$rate_TF?"T":"F").(!$rate_JP?"J":"P"); //i.e ESTJ

        $test_result = new TestResult;
        $test_result->email = $email;
        $test_result->answers = $temp;
        $test_result->perspective = $perspective;
        $test_result->save();

        $result = ['data_rate'=>[['id'=>1, 'data' => $rate_IE],['id'=>2, 'data' => $rate_SN],['id'=>3, 'data' => $rate_TF],['id'=>4, 'data' => $rate_JP]], 'perspective'=>$perspective];
        return json_encode($result);
    }
}
