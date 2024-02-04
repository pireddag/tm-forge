(texmacs-module (csv-table)
  (:use (csv-table-parse)))

;;;
;; file->TeXmacs-wide-tabular needs to do only the high-level transformation
;; from file to table. It needs to be called in a different way,
;; e.g. file->TeXmacs-table
;; I could have e.g. table->TeXmacs-Scheme-wide-tabular

;; Rename
;; start-file-to-table -> dialogue-file-to-table


;; Uses guile-csv
;; Copyright (C) 2008, 2012, 2013 
;; Andy Wingo <wingo at pobox dot com>
;; Nala Ginrut <nalaginrut@gmail.com>
;; to read the csv file into a list of lists


;; ===
;; read csv file into a list of lists

;; uses the code from guile-csv
;; imported from module csv-table-parse
(define (read-table data-port)
  (with read-csv (make-csv-reader csv-table:delimiter)
    (read-csv data-port)))


;; ===
;; get list form of the table and add TeXmacs markup

(define (cell->TeXmacs-Scheme cell-content)
  `(cell ,cell-content))

(define (row->TeXmacs-Scheme row-content)
  (append `(row) (map cell->TeXmacs-Scheme row-content)))

(define (table->TeXmacs-Scheme table-content)
  (append `(table) (map row->TeXmacs-Scheme table-content)))

(define (data-port->TeXmacs-Scheme-table data-port)
  (table->TeXmacs-Scheme (read-table data-port)))

;; data port to TeXmacs wide-tabular
(define (data-port->TeXmacs-wide-tabular data-port)
  (stree->tree `(wide-tabular ,(data-port->TeXmacs-Scheme-table data-port))))


;; ===
;; transform file into TeXmacs table and insert into TeXmacs document

;; adapted example of https://ds26gte.github.io/tyscheme/index-Z-H-9.html
(tm-define (insert-csv-table filename)
  (set! csv-table:delimiter #\,)
  ;; use cmd argument of dialogue windows to read data file and turn it into table
  (dialogue-window start-file-to-table (lambda (arg) (insert-csv-table-helper filename)) "Choose delimiter"))

(tm-define (insert-csv-table-helper filename)
  (set! filename (url->system filename))
  (insert (call-with-input-file  filename
	    data-port->TeXmacs-wide-tabular)))
