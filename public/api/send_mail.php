<?php
// Prevent PHP from showing errors directly to the browser
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Set content type to JSON
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Define a function to handle errors and return JSON
function error_response($message, $status_code = 500) {
    http_response_code($status_code);
    echo json_encode(['error' => $message]);
    exit;
}

// Check if autoload file exists
$autoload_path = '../vendor/autoload.php';
if (!file_exists($autoload_path)) {
    error_response("Could not find vendor/autoload.php. Make sure Composer dependencies are installed.");
}

// Load PHPMailer
require $autoload_path;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    $postData = file_get_contents("php://input");
    $request = json_decode($postData);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_response("Invalid JSON data received: " . json_last_error_msg(), 400);
    }
    
    // --- Basic Validation ---
    if (!isset($request->name) || empty(trim($request->name))) {
        error_response('Name is required.', 400);
    }
    if (!isset($request->email) || !filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
        error_response('A valid email is required.', 400);
    }
    if (!isset($request->subject) || empty(trim($request->subject))) {
        error_response('Subject is required.', 400);
    }
    if (!isset($request->message) || empty(trim($request->message))) {
        error_response('Message is required.', 400);
    }
    
    // Sanitize the data
    $name = htmlspecialchars(trim($request->name));
    $email = filter_var(trim($request->email), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($request->subject));
    $message = htmlspecialchars(trim($request->message));
    
    $mail = new PHPMailer(true);
    
    // Load environment variables from .env file
    try {
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();
    } catch (\Exception $e) {
        error_response("Could not load environment variables.");
    }
    
    try {
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USER'];
        $mail->Password = $_ENV['SMTP_PASS'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $_ENV['SMTP_PORT'];
        
        // Recipients
        $mail->setFrom($_ENV['FROM_EMAIL'], $_ENV['FROM_NAME']);
        $mail->addAddress($_ENV['RECIPIENT_EMAIL']);
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'New Contact Form Submission: ' . $subject;
        
        // Create a nice HTML email body
        $mail->Body = "
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
        error_response("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
} catch (Exception $e) {
    error_response("An unexpected error occurred: " . $e->getMessage());
}
?> 