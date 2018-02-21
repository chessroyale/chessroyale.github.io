	function attackingEnemy(enemyPiece, savedPiece){
   			if (enemy.hasClass('availiableAttack')) {
   				console.log('Atacando!');

   				var enemy = enemyPiece[0].children[0];

   				var life = enemy.dataset.life;
   				console.log(life);
   				var attack = savedPiece.dataset.attack;
   				console.log(attack);
   				var damage = enemy.dataset.damage;
   				console.log(damage);

   				var newLife = life - attack;
   				var newBarValue = (newLife * 100)/damage;
   				
   				$(enemy).attr('data-life', newLife);

   				$(enemy.children[1]).css('width', newBarValue);

   				var midLife = 60;
   				var lowLife = 30;
   				if (newBarValue < lowLife) {
   					$(enemy.children[1]).css('background-color', 'red');
   				} else if (newBarValue < midLife) {
   					$(enemy.children[1]).css('background-color', 'yellow');
   				}


   				if (enemy.dataset.life <= 0) {
   					$(enemyPiece[0]).empty();
   				}
   			}
   		};
