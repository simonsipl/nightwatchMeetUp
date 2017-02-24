# QA Starter NightWatchJS

Projekt startowy dla testów automatycznych e2e wsparty przez framework Nightwatch


## Przed instalacją

Upewnij się, czy masz zainstalowane narzędzie `node` (co najmniej v4) razem z `npm`.


## Instalacja

1. Sklonuj lub sforkuj repozytorium


2. Zainstaluje wymagane pakiety
    ```sh
    $ cd my-project
    $ npm install 
    ```

    (Polecenie zainstaluje wszelkie wymagne pakiety, a na końcu uruchomi skrypt instalujący binarki selenium oraz chromedriver)

3. Można testować
    ```sh
    $ npm run test
    ```

## Struktura katalogów
 - `features` - Testy i kroki Gherkin
 - `test` - pliki testów dla 'natywnych' (nie-gherkin) testów Nightwatcha
 - `pages` - _page objects_ używane w testach


## Reporting

Nightwatch generuje raport testów w katalogu `reports`. Jeśli dowolny test zwróci błąd - framework wygeneruje screenshot w katalogu `screenshots`.


## Pomocy!

Jeżeli masz więcej pytań zapytaj Szymon Stanisz.
