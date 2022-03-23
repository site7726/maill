$(document).ready(function() {
    //modify validator for bootstrap
    $.validator.setDefaults({
        errorElement: "span",
        errorClass: "help-block error",
        highlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        //using this because some of our inputs are hidden. Therefore, need to have an alternative - scroll to the parent object
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                if ($(validator.errorList[0].element).is(":visible")) {
                    $('html, body').animate({
                        scrollTop: $(validator.errorList[0].element).offset().top - 100
                    }, 1000);
                } else {
                    $('html, body').animate({
                        scrollTop: $(validator.errorList[0].element).parent().offset().top - 100
                    }, 1000);
                }
            }
        }
    });
});