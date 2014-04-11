jQuery(document).ready(function () {
 
    if (jQuery("HTML").hasClass("ie8-custom")) {
        for (var c = 1; c <= 12; c++) {
            jQuery('.small-' + c + '[class*="medium"]').removeClass("small-" + c);
            //Perform any other column-specific adjustments your design may require here
        }
        jQuery('.show-for-small').remove();
        jQuery('.hide-for-small').removeClass('hide-for-small');
        jQuery('.top-bar-section UL').css({ width: "inherit" });
        jQuery('.top-bar-section UL LI').css({ float: "left" });
        jQuery('.top-bar').css({ height: "inherit" });
    }
});