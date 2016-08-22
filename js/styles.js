// front end logic

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    debugger;
      $('#output').show(cssVote);

        var cssVote = [parseInt($("#cssVote").val())];
        var phpVote = parseInt($("#phpVote").val());
        var rubyVote = parseInt($("#rubyVote").val());

        // var cssArray =
        // var phpArray =
        // var rubyArray


        // var voteCss =  $(value.checked).val();
        // var person2Input = $("input#person2").val();
        // var animalInput = $("input#animal").val();
        // var exclamationInput = $("input#exclamation").val();
        // var verbInput = $("input#verb").val();
        // var nounInput = $("input#noun").val();

        // $(".person1").append(person1Input);
        // $(".person2").append(person2Input);
        // $(".animal").append(animalInput);
        // $(".exclamation").append(exclamationInput);
        // $(".verb").append(verbInput);
        // $(".noun").append(nounInput);
console.log(cssVote);
      });
    });

    // get = voteRuby.value;
    // // Backsies
    // var voteCss = [get = voteCss.value].val();
    // var votePhp = parseInt($("#checked").val());
    // var voteRuby = parseInt($("#checked").val());
    //
    // var voteArray = [voteCss, votePhp, voteRuby];
    // voteArray.sort(function(a, b){return b-a});
    // console.log();
    // var output = ("#tally").append(voteArray);
    // debugger;
    //
    // console.log();
    //
    //
    //   });
    //
    // });
    // //   if (votePhp ≥ voteCss && votePhp ≥ Ruby) {
    // //     usersOnes.push(1);
    // //   };
    // //   else if (usersChoice[i] === 0) {
    // //     usersOnes.push(1);
    // //   };
    // //   else if (usersChoice[i] === 1) {
    // //     usersTwos.push(1);
    // //   };
    // //   else if (usersChoice[i] === 2) {
    //     usersThrees.push(1);
    //   };
    //   else {
    //     ("$outPut").append("lorem ipsum")


// back end logic
