const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  import { getCSS } from "./common.js";
  const data = [
    {
      x: 'nomeDasRedes',
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: getCSS('--primary-color')
      }
    }
  ]
