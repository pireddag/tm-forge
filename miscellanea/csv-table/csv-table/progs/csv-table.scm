(texmacs-module (csv-table)
  (:use (csv-table-parse)))

;;;
;; file->TeXmacs-wide-tabular needs to do only the high-level transformation
;; from file to table. It needs to be called in a different way,
;; e.g. file->TeXmacs-table
;; I could have e.g. table->TeXmacs-Scheme-wide-tabular

;; Rename
;; start-file-to-table -> dialogue-file-to-table

;; Should not use variables and widgets tm-defined in csv-table-init (see at
;; the bottom of the file)


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
(tm-define (data-port->TeXmacs-wide-tabular data-port)
  (stree->tree `(wide-tabular ,(data-port->TeXmacs-Scheme-table data-port))))
