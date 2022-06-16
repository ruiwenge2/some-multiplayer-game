(()=>{"use strict";const t=6e3;function i(t,i){return Math.round(Math.random()*(i-t))+t}function e(i,e,s){return!("left"==i&&e<=0||"right"==i&&e+50>=t||"up"==i&&s<=0||"down"==i&&s+50>=t||"none"==i)}class s extends Phaser.GameObjects.Text{constructor(t,i,e,s,h){h||((h={}).fontFamily="Arial",h.fontSize=30,h.background=255),"fontFamily"in h||(h.fontFamily="Arial"),"fontSize"in h||(h.fontSize=30),super(t,i,e,s,h),this.scrollFactorX=0,this.scrollFactorY=0,this.setDepth(100),t.add.existing(this)}}const h=s;class n extends Phaser.GameObjects.Container{constructor(t,i,e,s,n,o){super(t),o||((o={}).fontSize=50,o.fontFamily="Arial",o.background=255),"fontSize"in o||(o.fontSize=50),"fontFamily"in o||(o.fontFamily="Arial"),"background"in o||(o.background=255),this.text=new h(t,i,e,s,{fontSize:o.fontSize,fontFamily:o.fontFamily}).setOrigin(.5),this.button=t.add.rectangle(0,0,0,0,o.background).setDepth(99),this.button.scrollFactorX=0,this.button.scrollFactorY=0,this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",n),t.add.existing(this)}}const o=n,a=JSON.parse('{"T":[{"id":0,"size":186,"x":4496,"y":1729},{"id":1,"size":297,"x":1819.5,"y":5146.5},{"id":2,"size":207,"x":5341.5,"y":1249.5},{"id":3,"size":285,"x":2159.5,"y":1865.5},{"id":4,"size":180,"x":340,"y":1131},{"id":5,"size":234,"x":2115,"y":3497},{"id":6,"size":282,"x":1871,"y":5139},{"id":7,"size":264,"x":2325,"y":5574},{"id":8,"size":234,"x":1161,"y":5274},{"id":9,"size":180,"x":4873,"y":1971},{"id":10,"size":258,"x":2865,"y":3448},{"id":11,"size":288,"x":4997,"y":2821},{"id":12,"size":177,"x":2053.5,"y":4142.5},{"id":13,"size":237,"x":983.5,"y":1290.5},{"id":14,"size":279,"x":1556.5,"y":2435.5},{"id":15,"size":240,"x":1703,"y":2908},{"id":16,"size":258,"x":1628,"y":4759},{"id":17,"size":195,"x":588.5,"y":5462.5},{"id":18,"size":198,"x":723,"y":3974},{"id":19,"size":246,"x":5340,"y":2207},{"id":20,"size":207,"x":311.5,"y":1702.5},{"id":21,"size":228,"x":5433,"y":1281},{"id":22,"size":294,"x":1030,"y":3640},{"id":23,"size":195,"x":4982.5,"y":4167.5},{"id":24,"size":285,"x":455.5,"y":3491.5},{"id":25,"size":210,"x":1834,"y":2952},{"id":26,"size":288,"x":1401,"y":3784},{"id":27,"size":285,"x":3996.5,"y":1460.5},{"id":28,"size":294,"x":3311,"y":5301},{"id":29,"size":186,"x":4237,"y":3062},{"id":30,"size":192,"x":323,"y":5076},{"id":31,"size":258,"x":5790,"y":1321},{"id":32,"size":186,"x":2887,"y":482},{"id":33,"size":240,"x":5804,"y":5377},{"id":34,"size":210,"x":5131,"y":3464},{"id":35,"size":294,"x":656,"y":1483},{"id":36,"size":252,"x":1526,"y":2973},{"id":37,"size":246,"x":2051,"y":3342},{"id":38,"size":267,"x":1444.5,"y":4877.5},{"id":39,"size":165,"x":394.5,"y":2193.5},{"id":40,"size":282,"x":5374,"y":1750},{"id":41,"size":213,"x":1488.5,"y":1471.5},{"id":42,"size":282,"x":5199,"y":5043},{"id":43,"size":234,"x":732,"y":4599},{"id":44,"size":219,"x":5850.5,"y":4376.5},{"id":45,"size":282,"x":1951,"y":4065},{"id":46,"size":255,"x":524.5,"y":3233.5},{"id":47,"size":249,"x":1269.5,"y":1815.5},{"id":48,"size":216,"x":3938,"y":5241},{"id":49,"size":249,"x":1406.5,"y":3093.5},{"id":50,"size":180,"x":5289,"y":5847},{"id":51,"size":186,"x":1879,"y":2017},{"id":52,"size":297,"x":1009.5,"y":3302.5},{"id":53,"size":195,"x":5170.5,"y":3386.5},{"id":54,"size":201,"x":5048.5,"y":240.5},{"id":55,"size":222,"x":1732,"y":3854},{"id":56,"size":228,"x":1759,"y":5587},{"id":57,"size":240,"x":3592,"y":5568},{"id":58,"size":267,"x":3098.5,"y":3394.5},{"id":59,"size":180,"x":940,"y":5653},{"id":60,"size":261,"x":4395.5,"y":2620.5},{"id":61,"size":192,"x":2476,"y":3745},{"id":62,"size":150,"x":3751,"y":5744},{"id":63,"size":285,"x":534.5,"y":807.5},{"id":64,"size":168,"x":273,"y":4088},{"id":65,"size":228,"x":1272,"y":2570},{"id":66,"size":192,"x":1477,"y":2878},{"id":67,"size":234,"x":436,"y":5435},{"id":68,"size":198,"x":5557,"y":4344},{"id":69,"size":291,"x":1055.5,"y":4290.5},{"id":70,"size":165,"x":1032.5,"y":2024.5},{"id":71,"size":210,"x":4209,"y":2683},{"id":72,"size":255,"x":1418.5,"y":4363.5},{"id":73,"size":180,"x":208,"y":4833},{"id":74,"size":300,"x":4190,"y":4653},{"id":75,"size":276,"x":3965,"y":805},{"id":76,"size":210,"x":1235,"y":3298},{"id":77,"size":291,"x":3736.5,"y":4209.5},{"id":78,"size":222,"x":3539,"y":911},{"id":79,"size":171,"x":4783.5,"y":2720.5},{"id":80,"size":243,"x":1607.5,"y":3120.5},{"id":81,"size":270,"x":2728,"y":4293},{"id":82,"size":291,"x":5158.5,"y":598.5},{"id":83,"size":279,"x":4717.5,"y":4855.5},{"id":84,"size":177,"x":3199.5,"y":5352.5},{"id":85,"size":216,"x":897,"y":3016},{"id":86,"size":183,"x":2218.5,"y":5367.5},{"id":87,"size":258,"x":379,"y":2057},{"id":88,"size":252,"x":3596,"y":5427},{"id":89,"size":231,"x":470.5,"y":450.5},{"id":90,"size":204,"x":1348,"y":4691},{"id":91,"size":282,"x":1372,"y":1075},{"id":92,"size":228,"x":3549,"y":4798},{"id":93,"size":174,"x":1401,"y":4589},{"id":94,"size":165,"x":405.5,"y":2010.5},{"id":95,"size":246,"x":1768,"y":2163},{"id":96,"size":297,"x":999.5,"y":4843.5},{"id":97,"size":240,"x":1525,"y":1481},{"id":98,"size":285,"x":1177.5,"y":2316.5},{"id":99,"size":240,"x":3948,"y":5653},{"id":100,"size":267,"x":2728.5,"y":1222.5},{"id":101,"size":264,"x":5702,"y":561},{"id":102,"size":216,"x":2245,"y":3278},{"id":103,"size":192,"x":5079,"y":3085},{"id":104,"size":228,"x":4421,"y":1423},{"id":105,"size":162,"x":1508,"y":4631},{"id":106,"size":204,"x":3077,"y":4433},{"id":107,"size":285,"x":4300.5,"y":4987.5},{"id":108,"size":219,"x":2300.5,"y":2650.5},{"id":109,"size":150,"x":606,"y":5914},{"id":110,"size":264,"x":945,"y":3960},{"id":111,"size":264,"x":3026,"y":4518},{"id":112,"size":159,"x":2573.5,"y":1593.5},{"id":113,"size":240,"x":2202,"y":4122},{"id":114,"size":189,"x":713.5,"y":5802.5},{"id":115,"size":237,"x":1255.5,"y":5732.5},{"id":116,"size":201,"x":1801.5,"y":5146.5},{"id":117,"size":270,"x":5158,"y":3487},{"id":118,"size":228,"x":3282,"y":3485},{"id":119,"size":174,"x":1244,"y":5678},{"id":120,"size":297,"x":2971.5,"y":3912.5}]}');class d extends Phaser.Scene{constructor(){super()}preload(){for(let t of Object.keys(skins))this.load.image(`skin_${skins[t].id}`,`/img/skins/${skins[t].url}.png`);this.load.image("player","/img/skins/player.png"),this.load.image("coin","/img/gameObjects/coin.png"),this.load.image("grass","/img/gameObjects/tile.png"),this.load.image("bullet","/img/gameObjects/bullet.png"),this.load.image("pistol","/img/guns/pistol.png"),this.load.image("obstacle","/img/gameObjects/obstacle.png"),this.load.image("obstacle2","/img/gameObjects/obstacle2.png"),this.load.image("tree","/img/gameObjects/tree.png"),this.loadingtext=new h(this,window.innerWidth/2,window.innerHeight/2,"Loading...",{fontSize:100}).setOrigin(.5)}create(){this.loaded=!1,this.socket=io("https://blaster2d.ruiwenge2.repl.co"),this.otherplayers=this.physics.add.group(),this.otherguns=this.physics.add.group(),this.coins=this.physics.add.group(),this.trees=this.physics.add.group(),this.socket.emit("join",localStorage.getItem("name")),this.socket.on("gamedata",(t=>{this.loaded=!0,this.loadingtext.destroy(),this.player=this.physics.add.sprite(t.players[this.socket.id].x,t.players[this.socket.id].y,"player").setScale(.5,.5).setDepth(1),this.cameras.main.startFollow(this.player),this.data={x:t.players[this.socket.id].x,y:t.players[this.socket.id].y,angle:0,angle2:0};for(let i of t.coins)this.coins.create(i.x,i.y,"coin").setScale(.75,.75).setDepth(1).id=i.id;for(let t of a.T)this.trees.create(t.x,t.y,"tree").setScale(t.size/300).setDepth(10).id=t.id;for(let i of Object.keys(t.players))if(i!=this.socket.id){this.otherplayers.create(t.players[i].x,t.players[i].y,"player").setScale(.5,.5).setDepth(1).id=i;let e=this.otherguns.create(t.players[i].x+53*Math.cos(t.players[i].angle2),t.players[i].y+53*Math.sin(t.players[i].angle2),"pistol").setDepth(15);e.angle=t.players[i].angle,e.angle2=t.players[i].angle2,e.id=i}this.main()})),this.socket.on("new player",((t,i)=>{let e=this.otherplayers.create(t.x,t.y,"player").setScale(.5,.5).setDepth(1),s=this.otherguns.create(t.x+53*Math.cos(0),t.y+53*Math.sin(0),"pistol").setDepth(15);s.angle=0,s.angle2=0,e.id=i,s.id=i})),this.socket.on("other player move",((t,i)=>{this.otherplayers.getChildren().forEach((e=>{e.id==t&&(e.setPosition(i.x,i.y),e.angle=i.angle,this.otherguns.getChildren().forEach((e=>{e.id==t&&(e.angle=i.angle,e.angle2=i.angle2,e.setPosition(i.gunx,i.guny))})))}))})),this.socket.on("collected gold",(t=>{for(let i of this.coins.children.entries)i.id==t&&(i.destroy(),console.log("deleted coin"))})),this.socket.on("left",(t=>{for(let i of this.otherplayers.children.entries)i.id==t&&i.destroy();for(let i of this.otherguns.children.entries)i.id==t&&i.destroy()})),this.socket.on("leave",(()=>{this.scene.start("disconnect_scene")}))}main(){this.w=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),this.a=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),this.s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.d=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);for(let i=30;i<t;i+=60)for(let e=30;e<t;e+=60)this.physics.add.image(i,e,"grass").setDepth(0);this.obstacle1=this.physics.add.staticSprite(3e3,2250,"obstacle").setDepth(0),this.obstacle2=this.physics.add.staticSprite(3e3,3750,"obstacle").setDepth(0),this.obstacle3=this.physics.add.staticSprite(2250,3e3,"obstacle2").setDepth(0),this.obstacle4=this.physics.add.staticSprite(3750,3e3,"obstacle2").setDepth(0),this.gun=this.physics.add.sprite(this.player.x,this.player.y,"pistol").setDepth(15),this.gun.angle2=0,this.bullets=this.physics.add.group(),this.health=100,this.healthtext=new h(this,100,50,"Health"),this.healthbar=this.add.rectangle(200,100,200,20,16777215).setDepth(10),this.healthbar.scrollFactorX=0,this.healthbar.scrollFactorY=0,this.healthbarinside=this.add.rectangle(200,100,200,20,6353420).setDepth(10),this.healthbarinside.scrollFactorX=0,this.healthbarinside.scrollFactorY=0,this.score=0,this.scoretext=new h(this,window.innerWidth-200,100,"Score: "+this.score),this.gold=0,this.goldtext=new h(this,window.innerWidth-200,150,"Gold: "+this.gold),this.addWeaponActions();var i=this;this.healFunction=setInterval((function(){i.health<100&&(i.health+=1,i.updateHealthBar())}),1e3),this.physics.add.collider(this.player,this.coins,((t,i)=>{this.collect(t,i)})),this.physics.add.collider(this.bullets,this.obstacle1,((t,i)=>{i.destroy()})),this.physics.add.collider(this.player,this.obstacle1,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle2,((t,i)=>{i.destroy()})),this.physics.add.collider(this.player,this.obstacle2,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle3,((t,i)=>{i.destroy()})),this.physics.add.collider(this.player,this.obstacle3,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle4,((t,i)=>{i.destroy()})),this.physics.add.collider(this.player,this.obstacle4,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)}))}collect(t,e){this.socket.emit("collect gold",e.id),console.log(e.id),this.gold+=1,this.goldtext.setText("Gold: "+this.gold),e.destroy(),this.gold>localStorage.getItem("bestgold")&&localStorage.setItem("bestgold",this.gold);for(let t=0;t<i(0,2);t++)this.coins.create(i(18.75,5981.25),i(18.75,5981.25),"coin").setScale(.75,.75)}updateHealthBar(){this.health<0&&(this.health=0),this.healthbarinside.width=200*this.health/100}addWeaponActions(){this.useweapon=!0,window.addEventListener("mousedown",(t=>{if(!this.useweapon)return;var i=Math.atan2(t.clientY-window.innerHeight/2,t.clientX-window.innerWidth/2);let e=this.bullets.create(this.player.x+48*Math.cos(i),this.player.y+48*Math.sin(i),"bullet").setScale(.5,2).setDepth(13);e.angle=(180*i/Math.PI+360)%360,e.setVelocityX(1500*Math.cos(i)),e.setVelocityY(1500*Math.sin(i)),this.gun.angle=(180*i/Math.PI+360)%360,this.gun.angle2=i,this.useweapon=!1})),window.addEventListener("mousemove",(t=>{var i=Math.atan2(t.clientY-window.innerHeight/2,t.clientX-window.innerWidth/2);this.gun.angle=(180*i/Math.PI+360)%360,this.gun.angle2=i})),setInterval((()=>{this.useweapon||(this.useweapon=!0)}),500)}update(){if(!this.loaded)return;this.fpstext||(this.fpstext=new h(this,window.innerWidth-200,200,"Loading FPS...")),this.fpstext.setText("FPS: "+Math.round(this.sys.game.loop.actualFps));let t=this.input.keyboard.createCursorKeys();this.player.setVelocityX(0),this.player.setVelocityY(0),(t.left.isDown||this.a.isDown)&&e("left",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityX(-275),(t.right.isDown||this.d.isDown)&&e("right",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityX(275),(t.up.isDown||this.w.isDown)&&e("up",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityY(-275),(t.down.isDown||this.s.isDown)&&e("down",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityY(275),this.gun.x=this.player.body.position.x+25+53*Math.cos(this.gun.angle2),this.gun.y=this.player.body.position.y+25+53*Math.sin(this.gun.angle2),this.player.angle=this.gun.angle,this.player.x==this.data.x&&this.player.y==this.data.y&&this.player.angle==this.data.angle||(this.data.x=this.player.x,this.data.y=this.player.y,this.data.angle=this.gun.angle,this.data.angle2=this.gun.angle2,this.data.gunx=this.gun.x,this.data.guny=this.gun.y,this.socket.emit("player move",this.data))}}const l=d;class r extends Phaser.Scene{constructor(){super()}preload(){}create(){localStorage.getItem("bestscore")||localStorage.setItem("bestscore",0),localStorage.getItem("bestgold")||localStorage.setItem("bestgold",0),this.add.text(window.innerWidth/2,100,"Game",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2.5,"Play",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("gamescene")})),this.button2=this.add.rectangle(0,0,0,0,240),this.text2=this.add.text(window.innerWidth/2,window.innerHeight/1.8,"How To Play",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button2.width=this.text2.width+15,this.button2.height=this.text2.height+15,this.button2.x=this.text2.x-this.text2.width/2-5,this.button2.y=this.text2.y-this.text2.height/2-5,this.button2.setInteractive().on("pointerdown",(()=>{this.scene.start("howtoplay")})),this.button3=this.add.rectangle(0,0,0,0,240),this.text3=this.add.text(window.innerWidth/2,window.innerHeight/1.4,"Your Best Scores",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button3.width=this.text3.width+15,this.button3.height=this.text3.height+15,this.button3.x=this.text3.x-this.text3.width/2-5,this.button3.y=this.text3.y-this.text3.height/2-5,this.button3.setInteractive().on("pointerdown",(()=>{this.scene.start("bestscores")}))}update(){}}const y=r;class c extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"How To Play",{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/1.5,"Back",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+10,this.button.height=this.text.height+10,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const x=c;class g extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"You Died",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2,"OK",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const p=g;class u extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"Your Best",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.add.text(window.innerWidth/2,300,"Score: "+localStorage.getItem("bestscore"),{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.add.text(window.innerWidth/2,400,"Gold: "+localStorage.getItem("bestgold"),{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/1.25,"Back",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const z=u;class w extends Phaser.Scene{constructor(){super()}preload(){}create(){this.disconnecttext=new h(this,window.innerWidth/2,100,"You got disconnected",{fontSize:50}).setOrigin(.5),this.button=new o(this,window.innerWidth/2,window.innerHeight/2,"OK",(()=>{location.reload()}))}update(){}}const b=w,f={type:Phaser.AUTO,width:window.innerWidth,height:window.innerHeight,backgroundColor:"#000000",physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}}};localStorage.getItem("name")&&!loggedIn&&(document.getElementById("input").value=localStorage.getItem("name")),document.getElementById("playbtn").addEventListener("click",(function(){let t=document.getElementById("input").value;if(!t.replace(/\s/g,""))return void(document.querySelector("p").style.display="block");localStorage.setItem("name",t);const i=new Phaser.Game(f);i.scene.add("gamescene",l),i.scene.add("joinscene",y),i.scene.add("howtoplay",x),i.scene.add("diedscene",p),i.scene.add("bestscores",z),i.scene.add("disconnect_scene",b),i.scene.start("gamescene"),document.querySelector("canvas").style.cursor="crosshair",window.addEventListener("resize",(()=>{i.scale.resize(window.innerWidth,window.innerHeight)})),document.querySelector("main").style.display="none"}))})();