$('document').ready(function() {
    let count  = 0
    $("#dec").click(() => {
        if (count < 1){
            $('#dec').disabled();
            setNewValue();
        }
        else{
            count = count - 1;
            setNewValue();
        }
        
      });
      
      $('#inc').click(() => {
        if (count > 9){
            $('#inc').disabled();
            setNewValue();
        }
        else{
            count = count + 1;
            setNewValue();
        }
      });
      
      $("#reset").click(() => {
        count = 0;
        setNewValue();
      });
      
      function setNewValue() {
        if (count%2==0){
             $("h1").html(count);
             $('.container').css({
                 'backgroundColor':'lightblue',
             })
             $('h1').css('color', 'white')
        }
        else{
            $("h1").html(count);
             $('.container').css({
                 'backgroundColor':'grey',
             })
             $('h1').css('color', 'red')
            }
      }
      
})