---
title: Erlang
year: 1986
era: 1980s
designers: [Joe Armstrong, Robert Virding, Mike Williams]
paradigms: [functional, concurrent, distributed]
typing: dynamic, strong
summary: The telecom language built for systems that never stop, with lightweight processes, message passing and hot code loading.
links:
  - label: Erlang.org
    url: https://www.erlang.org/
  - label: Erlang/OTP documentation
    url: https://www.erlang.org/docs
  - label: Learn You Some Erlang for Great Good!
    url: https://learnyousomeerlang.com/
  - label: Joe Armstrong's thesis "Making reliable distributed systems in the presence of software errors" (PDF)
    url: https://erlang.org/download/armstrong_thesis_2003.pdf
---

## Hello, World!

```erlang
-module(hello).
-export([main/0]).

main() ->
    io:format("Hello, World!~n").
```

Compile and run in the shell with `c(hello). hello:main().`, or interactively simply type `io:format("Hello, World!~n").`.

## About

Erlang is a functional language whose runtime, the BEAM virtual machine, schedules millions of tiny isolated processes that share nothing and communicate only by asynchronous messages. Failures are handled by "letting it crash" and having supervisor processes restart the failed part, a philosophy codified in the OTP framework's behaviours. The system supports hot code swapping, so running services can be upgraded without downtime, and transparent distribution across nodes. These properties have made Erlang the backbone of telephone switches, WhatsApp, RabbitMQ, CouchDB and many messaging and gaming backends.

## History

Joe Armstrong, Robert Virding and Mike Williams developed Erlang at the Ericsson Computer Science Laboratory from 1986, first as a Prolog-based prototype, to improve the development of telephony software. The BEAM VM arrived in the early 1990s, and the AXD301 ATM switch, built in Erlang, became famous for its reported "nine nines" availability. Ericsson briefly banned the language internally in 1998, which prompted its release as open source the same year. Interest surged again in the multicore era, and Elixir (2012) and Gleam brought new communities to the BEAM. Armstrong died in 2019; the language and OTP continue to be developed by Ericsson and the Erlang Ecosystem Foundation.
