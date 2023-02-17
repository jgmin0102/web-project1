const Move = function(selector){
    const Target = document.querySelector(selector);
    const targetScorll = Target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: targetScorll, behavior: 'smooth' });
  };

const scollMove = document.querySelectorAll("[data-scroll='true']"); 
  for(let i = 0; i < scollMove.length; i++){
    scollMove[i].addEventListener('click', function(e){
      const target = this.dataset.target;
      Move(target);
    });
  };


