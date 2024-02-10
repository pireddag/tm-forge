(texmacs-module (csv-table-init))

(use-modules (csv-table)) ;; for the function data-port->TeXmacs-wide-tabular

;; need to explain that guile-csv parses csv files according to standard

;; ===
;; Definition of mode and condition

;; See Scheme developer guide, p. 28
(texmacs-modes
  (in-big-table% (inside? 'big-table) in-text%))

;; Test for making the csv-table conversion available
(tm-define (csv-table-condition)
  (and
   (or (in-text?) (in-big-table?))
   (not (in-table?))))


;;===
;; csv field delimiters

;; Default field delimiter
(tm-define csv-table:delimiter  #\,)

;; List of field delimiters we recognize in the csv file
(tm-define csv-table:delimiter-list
  `(("," . ,#\,)
    (";" . ,#\;)
    ("tab" . ,#\tab)
    ("space" . ,#\space)))


;;===
;; Widgets

;; Issues a message to the user when the function is used outside
;; the planned environments
(tm-widget (csv-table-message-widget cmd)
  (vlist
    (centered
      (text "Please insert table in plain text")
      ===
      (text "or big-table environment")))
  (bottom-buttons >> ("Ok" (cmd "Ok"))))

;; Sets delimiter
(tm-widget (set-delimiter)
  (resize "200px" "100px"
    (scrollable
      (choice
       (set! csv-table:delimiter
	     (cdr (assoc answer csv-table:delimiter-list)))
       '("," ";" "tab" "space")
       ","))))

;; start-file-to-table
;; Launches the reading from the file once a choice has been made

;; It is inserted into insert-csv-table, where
;; cmd is set to (lambda (arg) (insert-csv-table-helper filename))
;; In that context, in the call (cmd "Ok") argument "Ok" is ignored and
;; argument filename is obtained from the function that calls
;; start-file-to-table

(tm-widget (start-file-to-table cmd)
  (dynamic (set-delimiter))
  (bottom-buttons >> ("Ok" (cmd "Ok"))))


;; ===
;; transform file into TeXmacs table and insert into TeXmacs document

;; uses functions from csv-table

(define (insert-csv-table filename)
  (set! csv-table:delimiter #\,)
  ;; set cmd argument of dialogue window to a lambda that reads the data file
  ;; and turns it into table without using the argument to the lambda function
  (dialogue-window start-file-to-table
		   (lambda (arg) (insert-csv-table-helper filename))
		   "Choose delimiter"))

;; Uses automated opening and closing of file ports
;; see e.g. https://ds26gte.github.io/tyscheme/index-Z-H-9.html#TAG:__tex2page_sec_7.3.1
(define (insert-csv-table-helper filename)
  (set! filename (url->system filename))
  (insert (call-with-input-file  filename
	    data-port->tm-wide-tabular)))


;;===
;; User interface
;; Keymaps and menu items

;; Map "t a b l e tab" to either a message for the user, if the cursor is
;; outside all of the environments where it is expected to work, or to the
;; insertion of a table at the cursor position

(kbd-map
  ("t a b l e tab"
   (dialogue-window
    csv-table-message-widget
    (lambda (arg) (noop))
    "csv-table message")))

(kbd-map
  (:require (csv-table-condition))
  ("t a b l e tab"
   (choose-file
    insert-csv-table
    "choose table file"
    "")))

;; Set menu item, inactive when the table cannot be inserted

(lazy-define-force insert-table-menu)

(tm-menu (insert-table-menu)
  (former)
  ---
  (when (csv-table-condition)
    ("Insert table from csv file"
     (choose-file
      insert-csv-table
      "choose table file"
      ""))))
