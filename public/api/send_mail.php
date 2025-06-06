<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require '../../vendor/autoload.php';

// Load environment variables from .env file
$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$postData = file_get_contents("php://input");
$request = json_decode($postData);

// --- Basic Validation ---
if (!isset($request->name) || empty(trim($request->name))) {
    http_response_code(400);
    echo json_encode(['error' => 'Name is required.']);
    exit;
}
if (!isset($request->email) || !filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'A valid email is required.']);
    exit;
}
if (!isset($request->subject) || empty(trim($request->subject))) {
    http_response_code(400);
    echo json_encode(['error' => 'Subject is required.']);
    exit;
}
if (!isset($request->message) || empty(trim($request->message))) {
    http_response_code(400);
    echo json_encode(['error' => 'Message is required.']);
    exit;
}

// Sanitize the data
$name = filter_var(trim($request->name), FILTER_SANITIZE_STRING);
$email = filter_var(trim($request->email), FILTER_SANITIZE_EMAIL);
$subject = filter_var(trim($request->subject), FILTER_SANITIZE_STRING);
$message = filter_var(trim($request->message), FILTER_SANITIZE_STRING);

$mail = new PHPMailer(true);

try {
    // --- Server settings ---
    $mail->isSMTP();
    $mail->Host       = $_ENV['SMTP_HOST'];     
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USER'];
    $mail->Password   = $_ENV['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $_ENV['SMTP_PORT'];

    // --- Recipients ---
    $recipientEmail = $_ENV['RECIPIENT_EMAIL']; 
    $mail->setFrom($_ENV['FROM_EMAIL'], $_ENV['FROM_NAME']);
    $mail->addAddress($recipientEmail);
    $mail->addReplyTo($email, $name);

    // --- Content ---
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'New Contact Form Submission: ' . $subject;
    
    // Create a nice HTML email body
    $mail->Body    = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { width: 90%; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                .header { background-color: #f4f4f4; padding: 10px; text-align: center; }
                .content { padding: 20px; }
                .content p { margin: 0 0 10px; }
                .footer { font-size: 0.9em; text-align: center; color: #777; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>New Message from your Website Contact Form</h2>
                </div>
                <div class='content'>
                    <p><strong>Name:</strong> {$name}</p>
                    <p><strong>Email:</strong> {$email}</p>
                    <p><strong>Subject:</strong> {$subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>" . nl2br($message) . "</p>
                </div>
                <div class='footer'>
                    <p>This email was sent from the contact form on your website.</p>
                </div>
            </div>
        </body>
        </html>";

    $mail->AltBody = "You have received a new message from your website contact form.\n\n" .
                     "Name: {$name}\n" .
                     "Email: {$email}\n" .
                     "Subject: {$subject}\n" .
                     "Message: \n{$message}";

    $mail->send();
    http_response_code(200);
    echo json_encode(['success' => 'Message has been sent.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}

?> 