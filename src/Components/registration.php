<?php

// Zkontrolujte, zda byl požadavek odeslán metodou POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Získání dat z těla požadavku
    $data = json_decode(file_get_contents('php://input'), true);

    // Ověření, že všechna požadovaná pole jsou přítomna
    if (isset($data['name'], $data['email'], $data['password'])) {
        // Ověření, že email má správný formát
        if (filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            // Připojení k databázi (nahraďte vaše připojení)
            $pdo = new PDO('mysql:https://ete32e.pef.czu.cz/adminer.php?username=ete32e_2324zs_01&db=ete32e_2324zs_01;dbname=ete32e_2324zs_01', 'ete32e_2324zs_01', '145sFAT09B!32');

            // Příprava SQL dotazu pro vložení nového uživatele do databáze
            $statement = $pdo->prepare('INSERT INTO users (name, email, pass) VALUES (:name, :email, :password)');
            // Vložení dat do dotazu
            $statement->execute([
                'name' => $data['name'],
                'email' => $data['email'],
                'pass' => password_hash($data['password'], PASSWORD_DEFAULT) // Heslo je hashováno pro bezpečnost
            ]);

            // Vrácení úspěšné odpovědi
            http_response_code(201);
            echo json_encode(['message' => 'User registered successfully']);
        } else {
            // Neplatný formát emailu
            http_response_code(422);
            echo json_encode(['error' => 'Invalid email format']);
        }
    } else {
        // Chybějící povinná pole
        http_response_code(422);
        echo json_encode(['error' => 'Missing required fields']);
    }
} else {
    // Neplatná metoda požadavku
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}
