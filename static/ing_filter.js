//credits: https://speedysense.com/filter-html-table-using-javascript/
// table filter used for conveniance

(function (document) {

    var TableFilter = (function (Arr) {

        var input;

        function _filter(cell) {
            var text = cell.textContent.toLowerCase();
            var val = input.value.toLowerCase();
            cell.style.display = (
                text.indexOf(val) === -1
                ? "none"
                : "table-row"
            );
        }

        function _onInputEvent(e) {
            input = e.target;
            var tables = document.getElementsByClassName(
                input.getAttribute("data-table")
            );
            Arr.forEach.call(tables, function (table) {
                Arr.forEach.call(table.tBodies, function (tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        return {
            init: function () {
                var inputs = document.getElementsByClassName(
                    "form-control search-input"
                );
                Arr.forEach.call(inputs, function (input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    }(Array.prototype));

    document.addEventListener("readystatechange", function () {
        if (document.readyState === "complete") {
            TableFilter.init();
        }
    });

}(document));