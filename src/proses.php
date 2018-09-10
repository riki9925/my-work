<?php
    $site_key = '6LdEGDMUAAAAAL2ll77IByqxOZvWtkplkzS2LFZN'; // Diisi dengan site_key API Google reCapthca yang sobat miliki
    $secret_key = '6LdEGDMUAAAAAPxblKQ483d9lAUdOk2-pFgG31Qw'; // Diisi dengan secret_key API Google reCapthca yang sobat miliki

    if (isset($_POST['submit']))
    {
        if(isset($_POST['g-recaptcha-response']))
        {
            $api_url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . $secret_key . '&response='.$_POST['g-recaptcha-response'];
            $response = @file_get_contents($api_url);
            $data = json_decode($response, true);

            if($data['success'])
            {
                $comment = $_POST['komentar'];
                // proses penyimpananan dan lain-lain disini
                $success = true;
            }
            else
            {
                $success = false;
            }
        }
        else
        {
            $success = false;
        }
    }
?>