---
title: PHP
year: 1995
era: 1990s
designers: [Rasmus Lerdorf, Andi Gutmans, Zeev Suraski]
paradigms: [imperative, object-oriented, functional, procedural]
typing: dynamic, weak, with gradual strict typing
summary: The server-side web language running WordPress, Wikipedia, Laravel and a large share of all websites.
links:
  - label: PHP.net
    url: https://www.php.net/
  - label: PHP Manual
    url: https://www.php.net/manual/en/
  - label: PHP RFCs
    url: https://wiki.php.net/rfc
  - label: PHP language specification
    url: https://github.com/php/php-langspec
---

## Hello, World!

```php
<?php
echo "Hello, World!\n";
```

Embedded in an HTML template, the original use case:

```php
<p><?= "Hello, World!" ?></p>
```

## About

PHP ("PHP: Hypertext Preprocessor") was designed to be embedded in HTML and to make dynamic web pages easy: every PHP script is a template that produces output, with direct access to request parameters, sessions, databases and the filesystem. Over time it grew into a complete language with classes, interfaces, traits, closures, generators, namespaces, a just-in-time compiler and an increasingly strict optional type system. Composer and frameworks such as Laravel and Symfony modernised the ecosystem, and PHP still powers WordPress, Drupal, Wikipedia (MediaWiki) and Facebook's early stack.

## History

Rasmus Lerdorf released "Personal Home Page Tools" in June 1995 as a set of C binaries for tracking visits to his online résumé. Andi Gutmans and Zeev Suraski rewrote the parser for PHP 3 (1998) and created the Zend Engine for PHP 4 (2000). PHP 5 (2004) brought a proper object model, and the ambitious PHP 6 Unicode project was abandoned, so PHP 7 (2015) followed, doubling performance. PHP 8 (2020) added the JIT, union types, attributes, named arguments and match expressions, and the PHP Foundation now funds core development.
