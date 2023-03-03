<?php
    
    namespace Phppot;   
    use Stripe\Stripe;
    use Stripe\WebhookEndpoint;
    require_once __DIR__ . './vendor/autoload.php';
    require_once __DIR__ . '/Config.php';
    $card=$_POST['card'];
    $name=$_POST['name'];
    $date=$_POST['date'];
    $cvv=$_POST['cvv'];
    $stripe_token =$_POST['stripeToken'];
    $email=$_GET['email'];
    $products=$_GET['products'];
    $userid=$_GET['userid'];
    $currency='inr';
    $amount=$_POST['amount'];
    $metaData="";
    // echo "<pre>";print_r($_POST);die;
    $stripe = new \Stripe\StripeClient('sk_test_51MbzvjSIN9538a9xarvvANcF18WdoZehaYBD4Wwm1DvNjo2V6RdYUXVNRcO0D3D9UqHlajqdZhrFGnSWdMYBk4tu00a5hUwP8Q');
    $customer_create = $stripe->customers->create([
        'email' => $email,
        'name' => $name,
        'description' => "example",
        'address' => [
            "line1" => "example",
            "line2" => null,
            "postal_code" => null,
            "state" => null,
        ],
    ]);
    $customer_strip_id = $customer_create->id;
    $save_card =  $stripe->customers->createSource(
        $customer_strip_id,
        ['source' => $stripe_token]
    );
    $payment = $stripe->paymentIntents->create([
        'amount' => $amount,
        'currency' => 'usd',
        'description' => 'Amount',
        'payment_method_types[]' => 'card',
        'customer' => $customer_strip_id,
        'payment_method' => $save_card->id,
        'confirm' => true,
        'off_session' => true,
        'shipping' => [
            'name' => $name,
            'address' => [
                'line1' => '510 Townsend St',
                'postal_code' => '98140',
                'city' => 'San Francisco',
                'state' => 'CA',
                'country' => 'US',
            ],
        ]

    ]);

    // echo $customer_strip_id;die;
    echo "<pre>";print_r($payment);


$transaction=$payment['created'];

    // class StripeService
    // {
    
    //     private $apiKey = 'pk_test_51MbzvjSIN9538a9x6Dubvd9CV3ppoIqoj9Z0aZEILqKQHxRuip2ChNEpvhgT8D5Plsb8uin1Cyj0xTrgKTkfk2ME00RZAKct33';
    
    //     private $stripeService;
    
    //     public function __construct()
    //     {
    //         require_once __DIR__ . '/Config.php';
    //         $this->stripeService = new Stripe();
    //         $this->stripeService->setVerifySslCerts(false);
    //         $this->stripeService->setApiKey($this->apiKey);
    //     }
    
    //     public function createPaymentIntent($orderReferenceId, $amount, $currency, $email, $notes, $metaData)
    //     {
    //         try {
    //             $this->stripeService->setApiKey($this->apiKey);
    
    //             $paymentIntent = \Stripe\PaymentIntent::create([
    //                 'description' => $notes,
    //                 'shipping' => [
    //                     'name' => $customerDetailsArray["name"],
    //                     'address' => [
    //                         'line1' => 'abc at abc ',
    //                         'postal_code' => '3800055',
    //                         'country' => 'India'
    //                     ]
    //                 ],
    //                 'amount' => $amount * 100,
    //                 'currency' => $currency,
    //                 'payment_method_types' => [
    //                     'credit card'
    //                 ],
    //                 'metadata' => $metaData
    //             ]);
    //             $output = array(
    //                 "status" => "success",
    //                 "response" => array('orderHash' => $orderReferenceId, 'clientSecret'=>$paymentIntent->client_secret)
    //             );
    //         } catch (\Error $e) {
    //             $output = array(
    //                 "status" => "error",
    //                 "response" => $e->getMessage()
    //             );
    //         }
    //         echo $output;
    //     }
    
    
    //     public function getToken()
    //     {
    //         $token = "";
    //         $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //         $codeAlphabet .= "abcdefghijklmnopqrstuvwxyz";
    //         $codeAlphabet .= "0123456789";
    //         $max = strlen($codeAlphabet) - 1;
    //         for ($i = 0; $i < 17; $i ++) {
    //             $token .= $codeAlphabet[mt_rand(0, $max)];
    //         }
    //         echo  $token;
    //     }
    // }
    include './connection.php';
    $sql="INSERT INTO `payment_orders`( `user_srno`, `Name`, `date`, `customer_strip_id`, `email`, `amount`, `Transaction_id`, `products`) VALUES ('$userid','$name','$date',' $customer_strip_id ','$email','$amount','$transaction','$products')";
    $result=mysqli_query($con,$sql);
    if($result){
        header("Location: http://localhost:3000/orders?payment=true");
    }



?>