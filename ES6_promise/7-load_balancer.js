// 7-load_balancer.js

// Definir la función loadBalancer
export default function loadBalancer(chinaDownload, USDownload) {
  // Utilizar Promise.race() para retornar la primera promesa resuelta
  return Promise.race([chinaDownload, USDownload]);
}
