<?php
    $json = array();
    if($_POST) {
        $todaydate = date("F j, Y");
        $todaytime = date("g:i a");
        $body = '';
       
        $body .= '
        <div style="background:#E9E9E9; height:100%; width:100%; margin:0px auto; padding:50px 0px;">
            <div style="width:600px; margin:0px auto; background:#FFFFFF; font-family:"Poppins", sans-serif; font-size:14px; line-height:20px; border-radius:5px;">  
                <h1 style="font-family:"Poppins", sans-serif; color:#fff; margin:0px; padding:30px 0px 30px; text-align:center; font-size:30px; line-height:30px; background:#fd9503;">The Code Lab</h1>
                <div style="padding:20px;">
                    <p>Please see the submission below.</p>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #CCCCCC; text-align:left; font-size:12px; font-family:"Poppins", sans-serif>';
                    if(isset($_POST['name']) && $_POST['name'] != '' ) {
                        $body .= '<tr>
                            <th width="20%"  style="border-bottom:1px solid #CCCCCC; padding:10px; color:#333;">NAME:</th>
                            <td width="80%" style="border-left:1px solid #CCCCCC; border-bottom:1px solid #CCCCCC; padding:10px;">'.$_POST['name'].'</td>
                        </tr>';
                    }
                    if(isset($_POST['email']) && $_POST['email'] != '' ) {
                        $body .= '<tr>
                            <th style="border-bottom:1px solid #CCCCCC; padding:10px; color:#333;">Email:</th>
                            <td style="border-left:1px solid #CCCCCC; border-bottom:1px solid #CCCCCC; padding:10px;">'.$_POST['email'].'</td>
                        </tr>';
                    }
                    if(isset($_POST['phone']) && $_POST['phone'] != '' ) {
                        $body .= '<tr>
                            <th style="border-bottom:1px solid #CCCCCC; padding:10px; color:#333;">Phone:</th>
                            <td style="border-left:1px solid #CCCCCC; border-bottom:1px solid #CCCCCC; padding:10px;">'.$_POST['phone'].'</td>
                        </tr>';
                    }
                    if(isset($_POST['googleid']) && $_POST['googleid'] != '' ) {
                        $body .= '<tr>
                            <th style="border-bottom:1px solid #CCCCCC; padding:10px; color:#333;">Skype/Google Talk ID:</th>
                            <td style="border-left:1px solid #CCCCCC; border-bottom:1px solid #CCCCCC; padding:10px;">'.$_POST['googleid'].'</td>
                        </tr>';
                    }
                    if(isset($_POST['msg']) && $_POST['msg'] != '' ) {
                        $body .= '<tr>
                            <th style="border-bottom:1px solid #CCCCCC; padding:10px; color:#333;">Message:</th>
                            <td style="border-left:1px solid #CCCCCC; border-bottom:1px solid #CCCCCC; padding:10px;">'.$_POST['msg'].'</td>
                        </tr>';
                    }
                    $body .= '</table>
                    <br>Thank you<br>
                    <strong>The Code Lab</strong>
                </div>
                <table width="100%" cellpadding="10" cellspacing="10" style="font-size:11px; line-height:18px;">
                    <tr>
                        <td width="50%" bgcolor="#F1F1F1">Date of the submission:<br><strong>'.$todaydate.'</strong></td>
                        <td width="50%" bgcolor="#F1F1F1">Time of the submission:<br><strong>'.$todaytime.'</strong></td>
                    </tr>
                </table>
            </div>
        </div>';
        $to = "icw.ekta@gmail.com";
        $subject = "The Code Lab - New notification";
        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";       
         
        if(mail($to,$subject,$body,$headers)){    
            echo 'hiiii';        
            $json['status'] = 'success';
            $body2 = '
            <div style="background:#E9E9E9; height:100%; width:100%; margin:0px auto; padding:50px 0px;">
                <div style="width:600px; margin:0px auto; background:#FFFFFF; font-family:Arial, sans-serif; font-size:14px; line-height:20px; border-radius:5px;">
                    <h1 style="font-family:Georgia, Times, \'Times New Roman\', serif; color:#fff; margin:0px; padding:30px 0px 30px; text-align:center; font-size:30px; line-height:30px; background:#40D4F4;">The Code Lab</h1>
                    <div style="padding:20px;">
                        <p><strong style="font-size: 20px;">Thank you for visiting </strong></p>';
                        if(isset($_POST['name']) && $_POST['name'] != '' ) {
                            $body2 .= '<p>Hi, '.$_POST['name'].'</p>';
                        }
                        $body2 .= '<p>Thank you for the inquiry you recently submitted. We will contact you shortly.</p>
                        <br>Thank you<br>
                        <strong>The Code Lab</strong>
                    </div>
                </div>
            </div>';
            $to2 = $_POST['email'];
            $subject2 = "The Code Lab - Notification";
            // Always set content-type when sending HTML email
            $headers2 = "MIME-Version: 1.0" . "\r\n";
            $headers2 .= "Content-type:text/html;charset=UTF-8" . "\r\n";            
            mail($to2,$subject2,$body2,$headers2);
        } else {
            $json['status'] = 'error';
        }
    }    
    echo json_encode($json);
?>