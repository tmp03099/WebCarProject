<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $subject = $params->subject;
        $message = $params->text;

        $recipient = "lam.ly.testing@gmail.com";
        $headers = "From: Toyota-Angiang <page@toyota-longxuyen.vn>";

        $success = mail($recipient, $subject, $message, $headers);
        if (!$success) {
            $errorMessage = error_get_last()['message'];
            error_log($errorMessage)
            header($errorMessage, true, 500)
        }
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

?>
