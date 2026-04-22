*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Arial;
  scroll-behavior:smooth;
}

body{
  background:#f5f5f5;
}

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:#0a1f44;
  color:white;
  padding:15px;
  position:sticky;
  top:0;
  z-index:1000;
}

.logo{
  display:flex;
  align-items:center;
  gap:10px;
}

.logo img{
  width:45px;
  height:45px;
  border-radius:8px;
}

nav a{
  color:white;
  margin:0 10px;
  text-decoration:none;
}

nav a:hover{
  color:#ffcc00;
}

.cart-btn{
  cursor:pointer;
}

.hero{
  height:400px;
  background:url('https://images.unsplash.com/photo-1516259762381-22954d7d3ad2') center/cover;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  text-align:center;
}

section{
  padding:60px 20px;
}

.products{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
}

.product{
  background:white;
  padding:10px;
  border-radius:10px;
  text-align:center;
  transition:0.3s;
}

.product:hover{
  transform:translateY(-5px);
}

.product img{
  width:100%;
  height:200px;
  object-fit:cover;
  border-radius:10px;
}

button{
  margin-top:10px;
  padding:10px;
  background:#0a1f44;
  color:white;
  border:none;
  cursor:pointer;
}

.cart-box{
  position:fixed;
  right:-350px;
  top:0;
  width:320px;
  height:100%;
  background:white;
  padding:20px;
  transition:0.4s;
  z-index:999;
  box-shadow:-5px 0 20px rgba(0,0,0,0.2);
}

.cart-box.active{
  right:0;
}

.overlay{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
  display:none;
  z-index:998;
}

.overlay.active{
  display:block;
}

.close-cart{
  position:absolute;
  top:10px;
  right:10px;
  background:red;
  color:white;
  border:none;
  padding:5px 10px;
  cursor:pointer;
}

#location iframe{
  width:100%;
  height:300px;
  border:0;
  margin-top:10px;
}

.footer{
  background:#0a1f44;
  color:white;
  text-align:center;
  padding:20px;
}

.footer .social a{
  color:white;
  margin:0 10px;
  text-decoration:none;
}

.footer .social a:hover{
  color:#ffcc00;
}

/* WHATSAPP FLOAT BUTTON */
.whatsapp{
  position:fixed;
  bottom:20px;
  right:20px;
  background:#25D366;
  color:white;
  padding:15px;
  border-radius:50%;
  font-size:20px;
  text-decoration:none;
  z-index:1000;
}
