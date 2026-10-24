---
title: Assembly
year: 1949
era: 1940s
designers: [Maurice Wilkes, David Wheeler, Kathleen Booth]
paradigms: [imperative, unstructured]
typing: untyped
summary: Human-readable mnemonics for a processor's native instructions; the lowest level you can program at without writing raw machine code.
links:
  - label: Intel 64 and IA-32 Architectures Software Developer Manuals
    url: https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html
  - label: NASM, the Netwide Assembler
    url: https://www.nasm.us/
  - label: GNU Assembler (as) manual
    url: https://sourceware.org/binutils/docs/as/
  - label: Arm A-profile architecture reference
    url: https://developer.arm.com/documentation/ddi0487/latest/
---

## Hello, World!

x86-64 Linux, NASM syntax, using raw system calls and no C library:

```asm
section .data
    msg     db  "Hello, World!", 10
    msg_len equ $ - msg

section .text
    global _start

_start:
    mov rax, 1          ; sys_write
    mov rdi, 1          ; file descriptor 1 = stdout
    mov rsi, msg
    mov rdx, msg_len
    syscall

    mov rax, 60         ; sys_exit
    xor rdi, rdi        ; exit code 0
    syscall
```

Assemble and link with `nasm -f elf64 hello.asm && ld hello.o -o hello && ./hello`.

## About

Assembly is not one language but a family: every processor architecture has its own instruction set and therefore its own assembly dialect, with x86, Arm and RISC-V being the most common today. An assembler translates mnemonics such as `mov` and `syscall` one-to-one into machine instructions, which gives the programmer complete control over registers, memory layout and timing at the cost of portability and productivity. It is still used for boot loaders, operating-system entry points, performance-critical inner loops, cryptography, exploit research and for understanding what compilers actually emit.

## History

The first assemblers appeared alongside the first stored-program computers. Kathleen Booth described an assembly notation for the ARC machine at Birkbeck in 1947, and the EDSAC team at Cambridge, led by Maurice Wilkes with David Wheeler, had a working "initial orders" assembler in 1949, which is usually counted as the first. Through the 1950s and 1960s assembly was the primary way to program a computer until Fortran, COBOL and later C demonstrated that compiled high-level languages could be fast enough. The arrival of microprocessors in the 1970s created a second golden age on home computers and games consoles, and modern SIMD and vector extensions keep the craft alive today.
