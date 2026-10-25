---
title: ABAP
year: 1983
era: 1980s
designers: [SAP SE]
paradigms: [imperative, object-oriented, procedural]
typing: static, strong
summary: SAP's proprietary business language in which millions of enterprise customisations and reports are written.
links:
  - label: ABAP Keyword Documentation (SAP Help Portal)
    url: https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm
  - label: SAP Community – ABAP
    url: https://community.sap.com/topics/abap
  - label: ABAP Cloud on SAP Business Technology Platform
    url: https://www.sap.com/products/technology-platform/abap.html
---

## Hello, World!

```abap
REPORT zhello.

WRITE 'Hello, World!'.
```

## About

ABAP ("Advanced Business Application Programming") is the language of SAP's ERP systems. It runs inside the SAP application server, with deep integration into the SAP database layer through Open SQL and into the dictionary of business data types. Programs are stored in the database rather than in files, and development happens inside the system with transport mechanisms to move code between environments. Since the late 1990s ABAP Objects has added classes and interfaces, and the modern "ABAP Cloud" model pairs the language with the HANA in-memory database and RESTful programming models.

## History

ABAP began in 1983 as a report-generation language for SAP R/2 on mainframes; its name originally stood for the German "Allgemeiner Berichts-Aufbereitungs-Prozessor". With SAP R/3 in 1992 it became the language in which the entire application suite was written and in which customers could extend it. ABAP Objects arrived in release 4.6 (2000), and subsequent releases added Unicode, inline declarations, expressions and the RAP (RESTful Application Programming) model for S/4HANA. Although confined to the SAP ecosystem, that ecosystem is large enough to make ABAP one of the most commercially significant languages in existence.
