---
title: Bash (Unix shell)
year: 1989
era: 1980s
designers: [Brian Fox, Chet Ramey (Bash), Stephen Bourne (sh)]
paradigms: [scripting, procedural, command language]
typing: dynamic, strings
summary: The default command interpreter and glue language of Linux and most Unix systems.
links:
  - label: GNU Bash homepage
    url: https://www.gnu.org/software/bash/
  - label: Bash Reference Manual
    url: https://www.gnu.org/software/bash/manual/
  - label: POSIX Shell Command Language specification
    url: https://pubs.opengroup.org/onlinepubs/9699919799/utilities/V3_chap02.html
  - label: ShellCheck, a static analyser for shell scripts
    url: https://www.shellcheck.net/
---

## Hello, World!

```bash
#!/usr/bin/env bash
echo "Hello, World!"
```

Make it executable and run it: `chmod +x hello.sh && ./hello.sh`.

## About

The shell is both an interactive command line and a programming language for automating tasks by combining other programs. Pipelines, redirection, globbing, variables, functions, arrays and control flow let a few lines orchestrate complex workflows, and because the same syntax works typed at the prompt or saved to a file, scripts grow naturally out of daily work. Bash extends the POSIX shell with richer arithmetic, associative arrays, process substitution and extensive command-line editing and completion. Shell is the lingua franca of build systems, container images, CI pipelines and system administration.

## History

Ken Thompson wrote the first Unix shell in 1971, and Stephen Bourne's `sh` for Version 7 Unix (1979) established the scripting syntax still in use. Bill Joy's C shell and David Korn's KornShell added interactive conveniences in the 1980s. Brian Fox wrote Bash ("Bourne-Again SHell") for the GNU Project, releasing it in 1989 as a free replacement for the Bourne shell; Chet Ramey has maintained it since 1994. POSIX standardised the shell language in 1992. Bash became the default shell on Linux and, from 2003 until 2019, on macOS, which has since switched to zsh. Bash 5.3 was released in 2025.
