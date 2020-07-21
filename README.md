![goethe.png](https://logo.goethe.pl/2/default.png)

# goethe
[Blog opisujący metody nauki gramatyki](www.goethe.pl) 

## app.goethe.pl
https://github.com/goethe-pl/app

Aplikacja do analizy gramatyki języka na podstawie zdania

### Zasada działania

analiza polega na znalezieniu zaimków osobowych, rzeczowników i czasowników na podstawie członów podstawowych

## Deploy PWA Website

<a href="http://app.faas.ovh?git=https://github.com/goethe-pl/app">
  <img src="https://button.faas.ovh/deploy.on.faas.png" alt="Deploy on Faas">
</a>


## Changelog
+ [changelog](changelog.md)



### Pierwsza wersja

Wymaga wpisania poprawnych rzeczowników i czasowników
są one wybierane z listy
Zaimki osobowe również

reszta jest analizowana i dobierana do odmiany rzeczownika i czasownika w czasie oraz przypadku


Wstępnie jest ograniczny zakres.

Wybór jest możliwy poprzez zmianę kolejności wyrazów i wyrażeń
Możliwość zmiany poprzez listę wyboru, gdy zaznaczy się określony wyraz.

Każdy wyraz, litera i zakończenie podlegające odmianie jest analizowane i wyselekcjonowane.

Można wybrać inny czasownik, ale podlega on tym samym regułom wczesniej obranym


Reguły są też obieralne, wówczas zmiana następuje kolejno w kazdym mającym wpływ na budowę zdania elemencie.

Jeśli czas zmienia odmianę i kolejność, to jest to automatycznie sugerowane


### Pole edycji

edycja jak w polu Input, tylko dla jednego zdania 
  


## Cel projektu

Nauka języka niemieckiego oraz rozwój systemów do nauki języków obcych

Wspieranie procesu nauki poprzez narzędzia i metody.

# [API Foundation](https://www.apifoundation.com)

Projekt APIcra jest wspierany przez [API Foundation](https://www.apifoundation.com)
+ szybsze wytwarzanie orogramowania
+ rozwiązania w kilku obszarach:

+ [APIexec - executor library for shell scripts](https://www.apiexec.com)
+ [APIcra - shell scripts libraries](https://www.apicra.com)
+ [APIunit - definition of application, CI, CD](https://www.apiunit.com)
+ [APIbuild - build process definition, focused on quality, versioning](https://www.jloads.com)
+ [APIsql - bazy danych, zapytania, modele](https://www.apisql.com)
+ [APIfunc - rozwiązania dla FaaS](https://www.apifunc.com)
