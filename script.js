
var card = document.getElementById('question_card');
var option_1 = document.getElementById('option_1');
var option_2 = document.getElementById('option_2');
var option_3 = document.getElementById('option_3');
var option_4 = document.getElementById('option_4');
var score_card = document.getElementById('score_card')
var option_card = document.getElementById('option_card')
var btn = document.getElementById('button');

    var app={
        questions:[
		            {q:'Which of these is the longest river in Africa?', options: ['Congo River','River Nile','Zambezi River','River Niger'], answer:2},

		            {q:'Which of these is the highest mountain in the world?', options: ['Mount Lhotse','Mount K2','Mount Kilimanjaro','Mount Everest'], answer:4},

		            {q:'Which of these is the largest continent in the world?', options: ['Asia','Australia','Europe','Africa'], answer:1},

		            {q:'Which of these is the largest planet?', options: ['Mercury','Jupiter','Earth','Saturn'], answer:2},

		            {q:'Which of these is the largest ocean in the world?', options: ['Pacific Ocean','Indian Ocean','Arctic Ocean','Atlantic Ocean'], answer:3}
        ],
        index:0,
        load: function(){
        	if(this.index<=this.questions.length-1){
	        	card.innerHTML = this.index+1+". "+this.questions[this.index].q;
	        	option_1.innerHTML = this.questions[this.index].options[0];
	        	option_2.innerHTML = this.questions[this.index].options[1];
	        	option_3.innerHTML = this.questions[this.index].options[2];
	        	option_4.innerHTML = this.questions[this.index].options[3];
	        	}
        	else{
        		card.innerHTML = "Quiz over.....Well done!";
                btn.innerHTML = "Try again!";
        		option_1.style.display="none";
        		option_2.style.display="none";
        		option_3.style.display="none";
        		option_4.style.display="none";
                btn.addEventListener("click",()=>{
                    location.reload();
                })
        	}
        },
	     check:function(options){
	    	var id=options.id.split('');
	    	if(id[id.length-1]==this.questions[this.index].answer){
	    		this.score++;
	    		score_card.innerHTML = this.score+"/"+this.questions.length;
	    		options.className = "correct";
	    		this.score_card();
	    	}
	    	else{
	    		options.className = "wrong";
                document.getElementById(`option_${this.questions[this.index].answer}`).className="correct";
            }
    	},
    	next:function(){
    		this.index++;
    		this.load();
    	},
    	notClickAble:function(){
    		for (let i = 0; i<option_card.children.length; i++) {
    			option_card.children[i].style.pointerEvents="none";
            }
    	},
    	clickAble:function(){
    		for (let i = 0; i<option_card.children.length; i++) {
    			option_card.children[i].style.pointerEvents="auto";
    			option_card.children[i].className='';
    		}
    	},
	    score:0,
      	score_card:function(){
	      	score_card.innerHTML = this.score+"/"+this.questions.length;
	    }
    }

    window.onload = app.load();

    function button(options){
    	app.check(options);
    	app.notClickAble();
    }
    function next(){
    	app.next();
    	app.clickAble();
    }
    
