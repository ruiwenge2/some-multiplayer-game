(()=>{"use strict";const t=6e3;function e(t,e){return Math.round(Math.random()*(e-t))+t}function i(e,i,s){return!("left"==e&&i<=0||"right"==e&&i+50>=t||"up"==e&&s<=0||"down"==e&&s+50>=t||"none"==e)}class s extends Phaser.GameObjects.Text{constructor(t,e,i,s,h){h||((h={}).fontFamily="Arial",h.fontSize=30,h.background=255),"fontFamily"in h||(h.fontFamily="Arial"),"fontSize"in h||(h.fontSize=30),super(t,e,i,s,h),this.scrollFactorX=0,this.scrollFactorY=0,this.setDepth(100),t.add.existing(this)}}const h=s;class n extends Phaser.GameObjects.Container{constructor(t,e,i,s,n,o){super(t),o||((o={}).fontSize=50,o.fontFamily="Arial",o.background=255),"fontSize"in o||(o.fontSize=50),"fontFamily"in o||(o.fontFamily="Arial"),"background"in o||(o.background=255),this.text=new h(t,e,i,s,{fontSize:o.fontSize,fontFamily:o.fontFamily}).setOrigin(.5),this.button=t.add.rectangle(0,0,0,0,o.background).setDepth(99),this.button.scrollFactorX=0,this.button.scrollFactorY=0,this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",n),t.add.existing(this)}}const o=n,a=JSON.parse('{"T":[{"id":0,"size":165,"x":4432.5,"y":1502.5},{"id":1,"size":300,"x":3038,"y":5700},{"id":2,"size":282,"x":5715,"y":779},{"id":3,"size":204,"x":4899,"y":2325},{"id":4,"size":171,"x":736.5,"y":5804.5},{"id":5,"size":258,"x":2615,"y":1119},{"id":6,"size":255,"x":3310.5,"y":756.5},{"id":7,"size":225,"x":1239.5,"y":1360.5},{"id":8,"size":282,"x":4493,"y":3035},{"id":9,"size":156,"x":4867,"y":325},{"id":10,"size":213,"x":4190.5,"y":2642.5},{"id":11,"size":213,"x":462.5,"y":1222.5},{"id":12,"size":294,"x":4454,"y":4499},{"id":13,"size":294,"x":1798,"y":1211},{"id":14,"size":210,"x":1420,"y":5625},{"id":15,"size":228,"x":3790,"y":5711},{"id":16,"size":282,"x":5844,"y":2735},{"id":17,"size":159,"x":429.5,"y":2708.5},{"id":18,"size":285,"x":5678.5,"y":5413.5},{"id":19,"size":195,"x":1931.5,"y":4069.5},{"id":20,"size":246,"x":2476,"y":1008},{"id":21,"size":192,"x":4653,"y":1103},{"id":22,"size":279,"x":5285.5,"y":3049.5},{"id":23,"size":159,"x":5281.5,"y":2673.5},{"id":24,"size":186,"x":817,"y":4705},{"id":25,"size":261,"x":5302.5,"y":1542.5},{"id":26,"size":198,"x":258,"y":1384},{"id":27,"size":273,"x":3025.5,"y":4810.5},{"id":28,"size":165,"x":1362.5,"y":1342.5},{"id":29,"size":198,"x":2603,"y":2154},{"id":30,"size":192,"x":2345,"y":415},{"id":31,"size":291,"x":1305.5,"y":3153.5},{"id":32,"size":270,"x":784,"y":2974},{"id":33,"size":183,"x":4902.5,"y":2058.5},{"id":34,"size":195,"x":2011.5,"y":3916.5},{"id":35,"size":288,"x":5468,"y":5379},{"id":36,"size":273,"x":4797.5,"y":2757.5},{"id":37,"size":177,"x":344.5,"y":4213.5},{"id":38,"size":288,"x":3986,"y":711},{"id":39,"size":240,"x":3971,"y":1081},{"id":40,"size":225,"x":2200.5,"y":1890.5},{"id":41,"size":168,"x":4779,"y":2713},{"id":42,"size":201,"x":619.5,"y":1565.5},{"id":43,"size":210,"x":1412,"y":918},{"id":44,"size":210,"x":2684,"y":5687},{"id":45,"size":174,"x":809,"y":5582},{"id":46,"size":174,"x":1164,"y":3537},{"id":47,"size":204,"x":4433,"y":577},{"id":48,"size":267,"x":1407.5,"y":5358.5},{"id":49,"size":198,"x":3356,"y":814},{"id":50,"size":294,"x":1133,"y":3387},{"id":51,"size":153,"x":5449.5,"y":5059.5},{"id":52,"size":279,"x":3103.5,"y":4716.5},{"id":53,"size":222,"x":5377,"y":2668},{"id":54,"size":300,"x":2864,"y":3528},{"id":55,"size":297,"x":4628.5,"y":5572.5},{"id":56,"size":258,"x":3746,"y":729},{"id":57,"size":183,"x":2997.5,"y":1910.5},{"id":58,"size":252,"x":5589,"y":2511},{"id":59,"size":225,"x":4161.5,"y":1963.5},{"id":60,"size":243,"x":3102.5,"y":3216.5},{"id":61,"size":270,"x":3316,"y":4738},{"id":62,"size":216,"x":3251,"y":3740},{"id":63,"size":279,"x":276.5,"y":5038.5},{"id":64,"size":294,"x":1025,"y":2236},{"id":65,"size":216,"x":2086,"y":3274},{"id":66,"size":186,"x":3769,"y":2037},{"id":67,"size":177,"x":1282.5,"y":3180.5},{"id":68,"size":201,"x":5061.5,"y":2307.5},{"id":69,"size":276,"x":4014,"y":4271},{"id":70,"size":267,"x":5269.5,"y":1684.5},{"id":71,"size":240,"x":1755,"y":4497},{"id":72,"size":225,"x":2998.5,"y":1233.5},{"id":73,"size":258,"x":4298,"y":5791},{"id":74,"size":165,"x":4805.5,"y":1077.5},{"id":75,"size":213,"x":4954.5,"y":1754.5},{"id":76,"size":291,"x":1099.5,"y":2691.5},{"id":77,"size":288,"x":2429,"y":5214},{"id":78,"size":270,"x":4227,"y":3560},{"id":79,"size":168,"x":5687,"y":696},{"id":80,"size":195,"x":583.5,"y":4852.5},{"id":81,"size":288,"x":4509,"y":846},{"id":82,"size":222,"x":3655,"y":1859},{"id":83,"size":204,"x":5205,"y":2708},{"id":84,"size":231,"x":5771.5,"y":1044.5},{"id":85,"size":198,"x":1614,"y":4333},{"id":86,"size":297,"x":3513.5,"y":5731.5},{"id":87,"size":156,"x":2988,"y":5188},{"id":88,"size":177,"x":2492.5,"y":2789.5},{"id":89,"size":183,"x":4227.5,"y":3413.5},{"id":90,"size":231,"x":4165.5,"y":3493.5},{"id":91,"size":189,"x":2792.5,"y":930.5},{"id":92,"size":177,"x":5235.5,"y":5639.5},{"id":93,"size":255,"x":4444.5,"y":2550.5},{"id":94,"size":264,"x":5738,"y":2767},{"id":95,"size":213,"x":1979.5,"y":5802.5},{"id":96,"size":243,"x":3220.5,"y":881.5},{"id":97,"size":159,"x":2486.5,"y":3122.5},{"id":98,"size":192,"x":3174,"y":444},{"id":99,"size":273,"x":2016.5,"y":4035.5},{"id":100,"size":156,"x":3206,"y":2330},{"id":101,"size":192,"x":3258,"y":4151},{"id":102,"size":192,"x":3459,"y":1627},{"id":103,"size":198,"x":2266,"y":2209},{"id":104,"size":177,"x":2679.5,"y":968.5},{"id":105,"size":237,"x":2978.5,"y":4577.5},{"id":106,"size":216,"x":2732,"y":2354},{"id":107,"size":159,"x":663.5,"y":3657.5},{"id":108,"size":153,"x":757.5,"y":4714.5},{"id":109,"size":246,"x":4366,"y":3129},{"id":110,"size":246,"x":651,"y":5592},{"id":111,"size":201,"x":4314.5,"y":765.5},{"id":112,"size":177,"x":3458.5,"y":2540.5}]}');class d extends Phaser.Scene{constructor(){super()}preload(){for(let t of Object.keys(skins))this.load.image(`skin_${skins[t].id}`,`/img/skins/${skins[t].url}.png`);this.load.image("player","/img/skins/player.png"),this.load.image("coin","/img/gameObjects/coin.png"),this.load.image("grass","/img/gameObjects/tile.png"),this.load.image("bullet","/img/gameObjects/bullet.png"),this.load.image("pistol","/img/guns/pistol.png"),this.load.image("obstacle","/img/gameObjects/obstacle.png"),this.load.image("obstacle2","/img/gameObjects/obstacle2.png"),this.load.image("tree","/img/gameObjects/tree.png"),this.loadingtext=new h(this,window.innerWidth/2,window.innerHeight/2,"Loading...",{fontSize:100}).setOrigin(.5)}create(){this.loaded=!1,this.socket=io("https://blaster2d.herokuapp.com"),this.otherplayers=this.physics.add.group(),this.otherguns=this.physics.add.group(),this.coins=this.physics.add.group(),this.trees=this.physics.add.group(),this.socket.emit("join",localStorage.getItem("name")),this.socket.on("gamedata",(t=>{this.loaded=!0,this.loadingtext.destroy(),this.player=this.physics.add.sprite(t.players[this.socket.id].x,t.players[this.socket.id].y,"player").setScale(.5,.5).setDepth(1),this.cameras.main.startFollow(this.player),this.data={x:t.players[this.socket.id].x,y:t.players[this.socket.id].y,angle:0,angle2:0};for(let e of t.coins)this.coins.create(e.x,e.y,"coin").setScale(.75,.75).setDepth(1).id=e.id;for(let t of a.T)this.trees.create(t.x,t.y,"tree").setScale(t.size/300).setDepth(10).id=t.id;for(let e of Object.keys(t.players))if(e!=this.socket.id){this.otherplayers.create(t.players[e].x,t.players[e].y,"player").setScale(.5,.5).setDepth(1).id=e;let i=this.otherguns.create(t.players[e].x+53*Math.cos(t.players[e].angle2),t.players[e].y+53*Math.sin(t.players[e].angle2),"pistol").setDepth(15);i.angle=t.players[e].angle,i.angle2=t.players[e].angle2,i.id=e}this.main()})),this.socket.on("new player",((t,e)=>{let i=this.otherplayers.create(t.x,t.y,"player").setScale(.5,.5).setDepth(1),s=this.otherguns.create(t.x+53*Math.cos(0),t.y+53*Math.sin(0),"pistol").setDepth(15);s.angle=0,s.angle2=0,i.id=e,s.id=e})),this.socket.on("other player move",((t,e)=>{this.otherplayers.getChildren().forEach((i=>{i.id==t&&(i.setPosition(e.x,e.y),i.angle=e.angle,this.otherguns.getChildren().forEach((i=>{i.id==t&&(i.angle=e.angle,i.angle2=e.angle2,i.setPosition(e.gunx,e.guny))})))}))})),this.socket.on("collected gold",(t=>{for(let e of this.coins.children.entries)e.id==t&&(e.destroy(),console.log("deleted coin"))})),this.socket.on("left",(t=>{for(let e of this.otherplayers.children.entries)e.id==t&&e.destroy();for(let e of this.otherguns.children.entries)e.id==t&&e.destroy()})),this.socket.on("leave",(()=>{this.scene.start("disconnect_scene")}))}main(){this.w=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),this.a=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),this.s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.d=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);for(let e=30;e<t;e+=60)for(let i=30;i<t;i+=60)this.physics.add.image(e,i,"grass").setDepth(0);this.obstacle1=this.physics.add.staticSprite(3e3,2250,"obstacle").setDepth(0),this.obstacle2=this.physics.add.staticSprite(3e3,3750,"obstacle").setDepth(0),this.obstacle3=this.physics.add.staticSprite(2250,3e3,"obstacle2").setDepth(0),this.obstacle4=this.physics.add.staticSprite(3750,3e3,"obstacle2").setDepth(0),this.gun=this.physics.add.sprite(this.player.x,this.player.y,"pistol").setDepth(15),this.gun.angle2=0,this.bullets=this.physics.add.group(),this.health=100,this.healthtext=new h(this,100,50,"Health"),this.healthbar=this.add.rectangle(200,100,200,20,16777215).setDepth(10),this.healthbar.scrollFactorX=0,this.healthbar.scrollFactorY=0,this.healthbarinside=this.add.rectangle(200,100,200,20,6353420).setDepth(10),this.healthbarinside.scrollFactorX=0,this.healthbarinside.scrollFactorY=0,this.score=0,this.scoretext=new h(this,window.innerWidth-200,100,"Score: "+this.score),this.gold=0,this.goldtext=new h(this,window.innerWidth-200,150,"Gold: "+this.gold),this.addWeaponActions();var e=this;this.healFunction=setInterval((function(){e.health<100&&(e.health+=1,e.updateHealthBar())}),1e3),this.physics.add.collider(this.player,this.coins,((t,e)=>{this.collect(t,e)})),this.physics.add.collider(this.bullets,this.obstacle1,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle1,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle2,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle2,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle3,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle3,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle4,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle4,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)}))}collect(t,i){this.socket.emit("collect gold",i.id),console.log(i.id),this.gold+=1,this.goldtext.setText("Gold: "+this.gold),i.destroy(),this.gold>localStorage.getItem("bestgold")&&localStorage.setItem("bestgold",this.gold);for(let t=0;t<e(0,2);t++)this.coins.create(e(18.75,5981.25),e(18.75,5981.25),"coin").setScale(.75,.75)}updateHealthBar(){this.health<0&&(this.health=0),this.healthbarinside.width=200*this.health/100}addWeaponActions(){this.useweapon=!0,window.addEventListener("mousedown",(t=>{if(!this.useweapon)return;var e=Math.atan2(t.clientY-window.innerHeight/2,t.clientX-window.innerWidth/2);let i=this.bullets.create(this.player.x+48*Math.cos(e),this.player.y+48*Math.sin(e),"bullet").setScale(.5,2).setDepth(13);i.angle=(180*e/Math.PI+360)%360,i.setVelocityX(1500*Math.cos(e)),i.setVelocityY(1500*Math.sin(e)),this.gun.angle=(180*e/Math.PI+360)%360,this.gun.angle2=e,this.useweapon=!1})),window.addEventListener("mousemove",(t=>{var e=Math.atan2(t.clientY-window.innerHeight/2,t.clientX-window.innerWidth/2);this.gun.angle=(180*e/Math.PI+360)%360,this.gun.angle2=e})),setInterval((()=>{this.useweapon||(this.useweapon=!0)}),500)}update(){if(!this.loaded)return;this.fpstext||(this.fpstext=new h(this,window.innerWidth-200,200,"Loading FPS...")),this.fpstext.setText("FPS: "+Math.round(this.sys.game.loop.actualFps));let t=this.input.keyboard.createCursorKeys();this.player.setVelocityX(0),this.player.setVelocityY(0),(t.left.isDown||this.a.isDown)&&i("left",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityX(-275),(t.right.isDown||this.d.isDown)&&i("right",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityX(275),(t.up.isDown||this.w.isDown)&&i("up",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityY(-275),(t.down.isDown||this.s.isDown)&&i("down",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityY(275),this.gun.x=this.player.body.position.x+25+53*Math.cos(this.gun.angle2),this.gun.y=this.player.body.position.y+25+53*Math.sin(this.gun.angle2),this.player.angle=this.gun.angle,this.player.x==this.data.x&&this.player.y==this.data.y&&this.player.angle==this.data.angle||(this.data.x=this.player.x,this.data.y=this.player.y,this.data.angle=this.gun.angle,this.data.angle2=this.gun.angle2,this.data.gunx=this.gun.x,this.data.guny=this.gun.y,this.socket.emit("player move",this.data))}}const l=d;class r extends Phaser.Scene{constructor(){super()}preload(){}create(){localStorage.getItem("bestscore")||localStorage.setItem("bestscore",0),localStorage.getItem("bestgold")||localStorage.setItem("bestgold",0),this.add.text(window.innerWidth/2,100,"Game",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2.5,"Play",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("gamescene")})),this.button2=this.add.rectangle(0,0,0,0,240),this.text2=this.add.text(window.innerWidth/2,window.innerHeight/1.8,"How To Play",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button2.width=this.text2.width+15,this.button2.height=this.text2.height+15,this.button2.x=this.text2.x-this.text2.width/2-5,this.button2.y=this.text2.y-this.text2.height/2-5,this.button2.setInteractive().on("pointerdown",(()=>{this.scene.start("howtoplay")})),this.button3=this.add.rectangle(0,0,0,0,240),this.text3=this.add.text(window.innerWidth/2,window.innerHeight/1.4,"Your Best Scores",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button3.width=this.text3.width+15,this.button3.height=this.text3.height+15,this.button3.x=this.text3.x-this.text3.width/2-5,this.button3.y=this.text3.y-this.text3.height/2-5,this.button3.setInteractive().on("pointerdown",(()=>{this.scene.start("bestscores")}))}update(){}}const y=r;class c extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"How To Play",{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/1.5,"Back",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+10,this.button.height=this.text.height+10,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const x=c;class g extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"You Died",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2,"OK",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const p=g;class u extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"Your Best",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.add.text(window.innerWidth/2,300,"Score: "+localStorage.getItem("bestscore"),{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.add.text(window.innerWidth/2,400,"Gold: "+localStorage.getItem("bestgold"),{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/1.25,"Back",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const w=u;class z extends Phaser.Scene{constructor(){super()}preload(){}create(){this.disconnecttext=new h(this,window.innerWidth/2,100,"You got disconnected",{fontSize:50}).setOrigin(.5),this.button=new o(this,window.innerWidth/2,window.innerHeight/2,"OK",(()=>{location.reload()}))}update(){}}const b=z,f={type:Phaser.AUTO,width:window.innerWidth,height:window.innerHeight,backgroundColor:"#000000",physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}}};localStorage.getItem("name")&&!loggedIn&&(document.getElementById("input").value=localStorage.getItem("name")),document.getElementById("playbtn").addEventListener("click",(function(){let t=document.getElementById("input").value;if(!t.replace(/\s/g,""))return void(document.querySelector("p").style.display="block");localStorage.setItem("name",t);const e=new Phaser.Game(f);e.scene.add("gamescene",l),e.scene.add("joinscene",y),e.scene.add("howtoplay",x),e.scene.add("diedscene",p),e.scene.add("bestscores",w),e.scene.add("disconnect_scene",b),e.scene.start("gamescene"),document.querySelector("canvas").style.cursor="crosshair",window.addEventListener("resize",(()=>{e.scale.resize(window.innerWidth,window.innerHeight)})),document.querySelector("main").style.display="none"}))})();