/*
  grafico.js
  Responsabilidade ÚNICA: integração com o Chart.js.
  "Chart" é global, vindo do script chart.umd.min.js (carregado antes).
*/
let graficoImpactoInstancia = null;

export function inicializarGraficoImpacto(){
    const canvas = document.getElementById("graficoImpacto");
    if(!canvas) return;

    // O canvas é recriado a cada render da home: destruir a instância
    // anterior evita o erro "Canvas is already in use"
    if(graficoImpactoInstancia){
        graficoImpactoInstancia.destroy();
    }

    graficoImpactoInstancia = new Chart(canvas, {
        type: "bar",
        data: {
            labels: ["Pessoas impactadas", "Parceiros", "Projetos ativos"],
            datasets: [{
                label: "Impacto da AB",
                data: [500, 20, 10],
                backgroundColor: ["#237762", "#5cc2a0", "#103f2d"],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(contexto){
                            const sufixo = contexto.dataIndex === 0 ? "+" : "";
                            return contexto.parsed.y + sufixo;
                        }
                    }
                }
            },
            scales: {
                y: { beginAtZero: true, ticks: { precision: 0 } }
            }
        }
    });
}