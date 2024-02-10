(texmacs-module (csv-table)
  (:use (csv-table-parse)))

;; Uses guile-csv to read the csv file into a list of lists
;; guile-csv is released under the LGPL v 3.0
;; with
;; Copyright (C) 2008, 2012, 2013 
;; Andy Wingo <wingo at pobox dot com>
;; Nala Ginrut <nalaginrut@gmail.com>



;; ===
;; read csv file into a list of lists

;; uses the code from guile-csv
;; imported from module csv-table-parse
(define (read-table data-port)
  (with read-csv (make-csv-reader csv-table:delimiter)
;csv-table:delimiter is used as a global variable and it should not
    (read-csv data-port)))


;; ===
;; from list form of the table to TeXmacs markup
;; markup as wide-tabular

(define (cell->tm-scheme-cell cell-content)
  `(cell ,cell-content))

(define (row->tm-scheme-row row-content)
  (append `(row) (map cell->tm-scheme-cell row-content)))

(define (list-of-rows->tm-scheme-table table-content)
  `(table ,@(map row->tm-scheme-row table-content)))

(define (list-of-rows->tm-scheme-wide-tabular table-content)
  `(wide-tabular ,(list-of-rows->tm-scheme-table table-content)))

;; ===
;; from data port to TeXmacs markup

;; data port to TeXmacs Scheme
(define (data-port->tm-scheme-wide-tabular data-port)
  (list-of-rows->tm-scheme-wide-tabular (read-table data-port)))

;; data port to TeXmacs
(tm-define (data-port->tm-wide-tabular data-port)
  (stree->tree (data-port->tm-scheme-wide-tabular data-port)))


