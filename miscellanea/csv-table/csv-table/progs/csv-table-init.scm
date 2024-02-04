(texmacs-module (csv-table-init))

(use-modules (csv-table)) ;; for the function insert-csv-table

;; Mode definitions
;; See Scheme developer guide, p. 28
(texmacs-modes
  (in-big-table% (inside? 'big-table) in-text%))


;; With this widget we issue a message to the user when the function is used outside
;; the planned environments
(tm-widget (csv-table-message-widget cmd)
  (vlist
    (centered
      (text "Please insert table in plain text")
      ===
      (text "or big-table environment")))
  (bottom-buttons >> ("Ok" (cmd "Ok"))))

;; Default field delimiter
(tm-define csv-table:delimiter  #\,)

;; List of field delimiters we recognize in the csv file
(tm-define csv-table:delimiter-list
  `(("," . ,#\,)
    (";" . ,#\;)
    ("tab" . ,#\tab)
    ("space" . ,#\space)))


(tm-widget (set-delimiter)
  (resize "200px" "100px"
    (scrollable
      (choice
       (set! csv-table:delimiter
	     (cdr (assoc answer csv-table:delimiter-list)))
       '("," ";" "tab" "space")
       ","))))

;; Need a widget to launch the reading from the file once that a choice has
;; been made
(tm-widget (start-file-to-table cmd)
  (dynamic (set-delimiter))
  (bottom-buttons >> ("Ok" (cmd "Ok"))))


;; Map "t a b l e tab" to either a message for the user, if the cursor is outside
;; all of the environments where it is expected to work, or to the insertion of
;; a table at the cursor position

(tm-define (csv-table-condition)
  (and
   (or (in-text?) (in-big-table?))
   (not (in-table?))))

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
     (choose-file insert-csv-table "choose table file" ""))))
