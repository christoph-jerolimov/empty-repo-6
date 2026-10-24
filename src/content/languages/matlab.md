---
title: MATLAB
year: 1984
era: 1980s
designers: [Cleve Moler, MathWorks]
paradigms: [array, imperative, procedural, object-oriented]
typing: dynamic, weak
summary: The matrix-first numeric computing environment that engineers and scientists reach for by default.
links:
  - label: MATLAB product page (MathWorks)
    url: https://www.mathworks.com/products/matlab.html
  - label: MATLAB documentation
    url: https://www.mathworks.com/help/matlab/
  - label: GNU Octave, a largely compatible free alternative
    url: https://octave.org/
  - label: Cleve Moler's "The Origins of MATLAB"
    url: https://www.mathworks.com/company/technical-articles/the-origins-of-matlab.html
---

## Hello, World!

```matlab
disp('Hello, World!')
```

Or with formatted output:

```matlab
fprintf('Hello, World!\n');
```

## About

MATLAB ("MATrix LABoratory") treats every value as a matrix, so `A * B`, `A \ b` and elementwise operations on whole arrays are the natural way to express numerical algorithms. It bundles an interactive command window, plotting, a debugger and a huge collection of toolboxes for signal processing, control systems, statistics, image processing, deep learning and more, plus Simulink for block-diagram simulation. The language itself is dynamically typed and script-oriented, with optional functions, classes and compilation to C via MATLAB Coder.

## History

Cleve Moler wrote the original MATLAB in Fortran in the late 1970s so that his students at the University of New Mexico could use the LINPACK and EISPACK libraries without writing Fortran themselves. Jack Little and Steve Bangert rewrote it in C, and the three founded MathWorks in 1984 to sell it commercially. MATLAB spread rapidly through engineering departments and industry, especially in control and signal processing. Open-source alternatives such as GNU Octave and Scilab, and later NumPy and Julia, were all shaped by its syntax and array-centric worldview.
