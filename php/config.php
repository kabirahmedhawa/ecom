<?php

// Including the library instead of using Composer
// Read more about installing this library here: https://github.com/stripe/stripe-php
require_once('vendor/stripe/stripe-php/init.php');

// Replace with your API keys
$stripe = array(
  "secret_key"      => "sk_test_51MbzvjSIN9538a9xarvvANcF18WdoZehaYBD4Wwm1DvNjo2V6RdYUXVNRcO0D3D9UqHlajqdZhrFGnSWdMYBk4tu00a5hUwP8Q",
  "publishable_key" => "pk_test_51MbzvjSIN9538a9x6Dubvd9CV3ppoIqoj9Z0aZEILqKQHxRuip2ChNEpvhgT8D5Plsb8uin1Cyj0xTrgKTkfk2ME00RZAKct33"
);

// Set the API key for use in your app
\Stripe\Stripe::setApiKey($stripe['secret_key']);

?>