 $(document).ready(function(){
       var ss=$("#para").val();
       
       $("#b1").on('click',function(){
          ss=ss + "1";
          $("#para").val(ss);
       });
       $("#b2").on('click',function(){
          ss=ss + "2";
          $("#para").val(ss);
       });
       $("#b3").on('click',function(){
          ss=ss + "3";
          $("#para").val(ss);
       });
       $("#b4").on('click',function(){
          ss=ss + "4";
          $("#para").val(ss);
       });
       $("#b5").on('click',function(){
          ss=ss + "5";
          $("#para").val(ss);
       });
       $("#b6").on('click',function(){
          ss=ss + "6";
          $("#para").val(ss);
       });
       $("#b7").on('click',function(){
          ss=ss + "7";
          $("#para").val(ss);
       });
       $("#b8").on('click',function(){
          ss=ss + 8;
          $("#para").val(ss);
       });
       $("#b9").on('click',function(){
          ss=ss + 9;
          $("#para").val(ss);
       });
       $("#b0").on('click',function(){
          ss=ss + 0;
          $("#para").val(ss);
       });
       $("#b11").on('click',function(){
          ss=ss + ".";
          $("#para").val(ss);
       });
       $("#bc").on('click',function(){
          ss="";
          $("#para").val(ss);
       });
       $("#c1").on('click',function(){
          ss=ss + "+";
          $("#para").val(ss);
       });
       $("#c2").on('click',function(){
          ss=ss + "-";
          $("#para").val(ss);
       });
       $("#c3").on('click',function(){
          ss=ss + "*";
          $("#para").val(ss);
       });
       $("#c4").on('click',function(){
          ss=ss + "/";
          $("#para").val(ss);
       });
       $("#cc").on('click',function(){
          var j=eval(ss);
          $("#para").val(j);
          ss=j;
       });
    });
    