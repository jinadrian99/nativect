<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Booking;
use App\Models\RoomType;
use Carbon\Carbon;

class ChangeStatusBooking extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:changeStatusBooking';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $bookings = Booking::select('idLP','idDP','slPhong')->where('status','=','1')->whereDate('ngayDi','<=',Carbon::now()->toDateString())->get();
        foreach ($bookings as $v) {
            $sl = RoomType::select('slPhongTrong')->where('idLP','=',$v->idLP)->get();
            // echo $sl[0]->slPhongTrong;

            RoomType::where('idLP','=',$v->idLP)->update([ 'slPhongTrong' => $sl[0]->slPhongTrong + $v->slPhong ]);
            Booking::where('idDP','=',$v->idDP)->update([ 'status' => 2 ]);
        }
    }
}
