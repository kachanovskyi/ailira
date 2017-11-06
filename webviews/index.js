$(document).ready(function () {

    var counter = 0;

    var beneficiaryOptions = [
        {val: "family", text: 'Family ties'},
        {val: "first", text: 'First category'},
        {val: "second", text: 'Second category'},
        {val: "third", text: 'Third category'},
        {val: "other", text: 'Other'}
    ];

    function setActiveSex(e) {
        e.stopImmediatePropagation();
        $('.sex-option-btn').removeClass('active');
        $(this).addClass('active');
    }

    function addBeneficiary() {

        var sel = $('<select>').appendTo('body');
        $(beneficiaryOptions).each(function () {
            sel.append($("<option>").attr('value', this.val).text(this.text));
        });

        var beneficiary = $('<div class="beneficiary row">');
        beneficiary
            .append(
                $('<h4>').text((counter + 1) + " beneficiary")
            );

        $('<div class="content">')
            .append(sel)
            .append(
                $('<input>')
                    .attr('type', 'text')
                    .attr('name', 'First Name')
                    .attr('placeholder', 'First Name')
                    .attr('required', 'true')
            )
            .append(
                $('<input>')
                    .attr('type', 'text')
                    .attr('name', 'Middle Name')
                    .attr('placeholder', 'Middle Name(Optional)')
            )
            .append(
                $('<input>')
                    .attr('type', 'text')
                    .attr('name', 'Last Name')
                    .attr('placeholder', 'Last Name')
                    .attr('required', 'true')
            )
            .append(
                $('<input>')
                    .attr('type', 'text')
                    .attr('name', 'Address')
                    .attr('placeholder', 'Address')
                    .attr('required', 'true')
            )
            .append(
                $('<input>')
                    .attr('type', 'date')
                    .attr('name', 'Date of birth')
                    .attr('placeholder', 'Date of birth')
                    .attr('required', 'true')
            )
            .append(
                $('<input>')
                    .attr('type', 'text')
                    .attr('name', 'Occupation')
                    .attr('placeholder', 'Occupation(Optional)')
            )
            .append(
                $('<div class="sex-options-container">')
                    .append(
                        $('<a class="sex-option-btn active col-xs-6">')
                            .text('Male')
                            .on("click", setActiveSex)
                    )
                    .append(
                        $('<a class="sex-option-btn col-xs-6">')
                            .text('Female')
                            .on("click", setActiveSex)
                    )
            )
            .appendTo(beneficiary);

        counter++;

        beneficiary.insertBefore('.save-container');

    }
    addBeneficiary();

    $('.add-beneficiary-btn').on("click", addBeneficiary);
});