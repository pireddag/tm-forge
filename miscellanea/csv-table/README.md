# csv-table
The csv-table plugin provides a keyboard shortcut to import a .csv file into a TeXmacs document as a table.

The file is imported through a Scheme function invoked in the TeXmacs editor by the key combination (keyboard shortcut) "t a b l e tab"---that is, type "table" followed by a tab---and is placed as a table in the current document at the cursor position.

The keyboard shortcut executes the import function only if the cursor is in plain text or in a big-table _environment_ (but not inside a table!), otherwise issues a warning. Please close the warning window before returning to editing your document, as TeXmacs won't do it on its own, and will open a _new_ warning window every time the keyboard shortcut is executed.

The plugin provides a menu item as well, blanked when the import cannot be executed. At the moment of writing this `readme` file (Jan 2024), the menu item is buggy: it works only once, for any subsequent use the import function is not executed. Users have to rely on the keyboard shortcut.


## Instructions

To be able to use the function, place the folder csv-table in your `.TeXmacs/plugin ` folder. 

After you do this, you will be able to load the `csv-table` package through the `Document -> Style -> Add package` menu item or through the "plus" icon in the lowest icon bar. 

Once the plugin is loaded, you will be able to insert a table contained in a `.csv` file by means of the "t a b l e tab" key combination. If you type "t a b l e tab", TeXmacs will open a file selection window. Upon file selection, you will get a widget asking you to select the column separator (default is comma); once you accept by pressing the OK button, TeXmacs will insert the table contained in the file at the cursor position.

The plugin checks whether the cursor is in plain text or in a `big-table` environment, and opens the file selection window only if the check is positive; if it is not, it issues a warning through the `table-message-widget` widget, which will be closed upon acknowledgement (_id est_ pressure of the "Ok" button). Please pay attention that the widget is not modal, so it will allow you access to your document (_id est_ it may happen that you forget that you have an open widget).

### Details

The shortcut, defined inside the Scheme file `progs/csv-table-init.csm`, executes the `insert-csv-table` function, defined inside the Scheme file `progs/csv-table.csm`, using as function argument the name of the file selected by means of the selection window. The `insert-csv-table` function inserts the data into the current buffer.

Columns can be separated by the following four separators: comma, semicolon, tab and space. If the separator is a space, multiple spaces are collapsed into one.

This plugin uses code from guile-csv, available at https://github.com/NalaGinrut/guile-csv/tree/master and licensed under GPL v.3.0, with a small modification, to read csv files compliant to the rfc4180 specification (https://www.ietf.org/rfc/rfc4180.txt). In particular, guile-csv is able to read quoted fields **as long as the opening quote comes immediately after the separator and the closing quote is the last character of the field**; quoted fields may contain delimiters, quotes and line breaks (see rfc4180 for details).

## Warnings

The function expects a file with a simple structure, where every row has the same number of entries and **does not do any error-checking**.
At the moment of writing this `readme` file (Jan 2024) there is no way to indicate that a separator character should be seen as part of the field and not as a column separator.

**I have done only a single test with a file having a structure different from what the plugin expects and TeXmacs did not crash, but I did not do enough testing to ensure that it will never crash when using the plugin, either on files formatted according to what the plugin expects or on other files.**

If using the shortcut triggers the warning widget (as one used it outside the environments where the shortcut is programmed to execute the `insert-csv-table` form), please close the widget before returning to editing your TeXmacs document, as the widget isn't modal---will not block you from editing your document.

## Test files

The repository includes short .csv test files inside the `csv-table\doc` directory, `data-scheme-table-sep.txt`, where `sep` stands for each of the column separators. Each test file contains a 3x3 table. In addition to these, there is a test file for the reading of a csv file with a quoted field.

## Possible improvements
 
* Add optional skipping of header lines
