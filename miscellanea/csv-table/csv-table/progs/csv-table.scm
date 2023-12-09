(texmacs-module (csv-table))

;;; read table from file into list of strings, one per line

(define (add-line-recursive data-port lines)
  (let ((line-in (read-line data-port)))
    (if (eof-object? line-in)
	lines
	(add-line-recursive data-port (cons line-in lines))
	)))

(define (read-table data-port)
  (reverse (add-line-recursive data-port '())))

;;; split each line into list of strings

(define (line->cell-list line)
  (string-split line #\,)) ; string-split exists in Guile but does not in Mit Scheme

(define (table->Scheme-list table)
  (map line->cell-list table))

;;; add TeXmacs markup to list form of the table

(define (cell->TeXmacs-Scheme cell-content)
  `(cell ,cell-content))

(define (row->TeXmacs-Scheme row-content)
  (append `(row) (map cell->TeXmacs-Scheme row-content)))

(define (table->TeXmacs-Scheme table-content)
  (append `(table) (map row->TeXmacs-Scheme table-content)))

(define (file->TeXmacs-Scheme-table data-port)
  (table->TeXmacs-Scheme (table->Scheme-list (read-table data-port))))

;;; file to TeXmacs wide-tabular

(define (file->TeXmacs-wide-tabular data-port)
  (stree->tree `(wide-tabular ,(file->TeXmacs-Scheme-table data-port))))


;;; transform file into table and insert into TeXmacs document

;; adapted example of https://ds26gte.github.io/tyscheme/index-Z-H-9.html
(tm-define (insert-csv-table filename)
	   (set! filename (url->system filename))
	   (insert (call-with-input-file  filename file->TeXmacs-wide-tabular)))
