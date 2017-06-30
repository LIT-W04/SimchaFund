$(function () {

    $(function () {
        $("#datepicker").datetimepicker({ format: 'MM/DD/YYYY' });
        $("#contributor_created_at").datetimepicker({ format: 'MM/DD/YYYY' });
    });

    $("#new-contributor").on('click', function () {
        $(".new-contrib").modal();
    });

    $(".deposit-button").on('click', function () {
        var contribId = $(this).data('contribid');
        $('[name="contributorId"]').val(contribId);

        var tr = $(this).parent().parent();
        var name = tr.find('td:eq(1)').text();
        $("#deposit-name").text(name);

        $(".deposit").modal();
    });

    $("#search").on('keyup', function () {
        var text = $(this).val();
        $("table tr:gt(0)").each(function () {
            var tr = $(this);
            var name = tr.find('td:eq(1)').text();
            if (name.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
                tr.show();
            } else {
                tr.hide();
            }
        });
    });

    $("#clear").on('click', function () {
        $("#search").val('');
        $("tr").show();
    });

    $(".edit-contrib").on('click', function () {
        var id = $(this).data('id');
        var firstName = $(this).data('firstName');
        var lastName = $(this).data('lastName');
        var cell = $(this).data('cell');
        var alwaysInclude = $(this).data('alwaysInclude');
        var date = $(this).data('date');

        var form = $(".new-contrib form");

        $("#initialDepositDiv").hide();
        form.append("<input type='hidden' name='id' value='" + id + "' />");
        $("#contributor_first_name").val(firstName);
        $("#contributor_last_name").val(lastName);
        $("#contributor_cell_number").val(cell);
        $("#contributor_always_include").prop('checked', alwaysInclude === "True");
        $("#contributor_created_at").val(date);
        $(".new-contrib").modal();
        form.attr('action', '/contributors/edit');
    });
});
