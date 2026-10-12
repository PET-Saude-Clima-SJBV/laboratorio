<script setup lang="ts">
</script>

<template>
  <section class="cartao-mapa">
    <div class="cabecalho-mapa">
      <h2>Mapa de calor do município</h2>
      <span class="badge-ilustrativo">dados ilustrativos</span>
    </div>
    
    <p class="descricao">Distribuição ilustrativa por região da cidade. Os dados reais serão publicados quando os territórios do projeto forem definidos.</p>
    
    <div class="container-mapa">
      <!-- O mapa Leaflet seria montado nesta div. 
           Para fins visuais, criei um placeholder simulando o visual. -->
      <div class="mapa-placeholder">
        <div class="controles-zoom">
          <button>+</button>
          <button>-</button>
        </div>
        <div class="mancha-calor"></div>
        <div class="creditos-mapa">
          <span>Leaflet | © colaboradores do OpenStreetMap</span>
        </div>
      </div>
      
      <div class="legenda">
        <span>menor</span>
        <div class="barra-gradiente"></div>
        <span>maior intensidade</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cartao-mapa {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.cabecalho-mapa {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.cabecalho-mapa h2 {
  font-size: 1.25rem;
  color: #222;
  margin: 0;
}

.badge-ilustrativo {
  background-color: #fdf0d5;
  color: #b07d1a;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.descricao {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.container-mapa {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

/* Simulação visual do Mapa */
.mapa-placeholder {
  height: 400px;
  background-color: #e5e3df;
  position: relative;
}

.controles-zoom {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.controles-zoom button {
  width: 30px;
  height: 30px;
  background: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.controles-zoom button:first-child {
  border-bottom: 1px solid #ccc;
}

.mancha-calor {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 250px;
  background: radial-gradient(circle, rgba(235,50,50,0.8) 0%, rgba(235,50,50,0.5) 40%, rgba(50,200,50,0) 70%);
  filter: blur(20px);
}

.creditos-mapa {
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(255,255,255,0.7);
  padding: 2px 5px;
  font-size: 0.7rem;
}

.legenda {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: white;
  font-size: 0.8rem;
  color: #555;
}

.barra-gradiente {
  width: 150px;
  height: 8px;
  background: linear-gradient(to right, #4caf50, #ffeb3b, #f44336);
  border-radius: 4px;
}
</style>
